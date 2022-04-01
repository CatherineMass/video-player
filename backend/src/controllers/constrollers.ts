import { NextFunction, Request, Response } from 'express';
import Knex from 'knex';
import { Model } from 'objection';
import fetch from 'node-fetch';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import config from '../../knexfile';
import Favorites from '../models/favorite';
import User from '../models/user';
import Video from '../models/video';
import { asyncWrap, asyncWrapper } from '../middlewares/async';
import { checkToken, getIds } from '../utils';
import { createAuthError } from '../errors/authError';
import { createCustomError } from '../errors/baseError';

interface VideoResult {
  etag: string;
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
  };
}

const secret: string = process.env.JWT_SECRET as string;
if (!secret) {
    throw new Error('You are missing a JWT secret in your environment');
}

// // Initialize knex
const knex = Knex(config.development);

// // // Give the knex instance to Objection
Model.knex(knex);

export const getAllVideos = asyncWrap(
    async (req: Request, res: Response, next: NextFunction) => {
        const { token, username } = req.body;

        const user = await checkToken(token, username);

        if (!user) {
            return next(createAuthError());
        }

        const videos = await Video.query();
        const resVideos = videos.map((video) => ({
            etag: video.etag,
            id: {
                videoId: video.videoId,
                name: video.name,
            },
        }));

        res.status(200).json({
            response: 'successfull',
            data: {
                resVideos,
            },
        });
    }
);

export const addFavorite = asyncWrap(
    async (req: Request, res: Response, next: NextFunction) => {
        const { username, videoId, token } = req.body;

        const user = await checkToken(token, username);

        if (!user) {
            return next(createAuthError());
        }

        const { userId, vidId } = await getIds(username, videoId);

        await Favorites.query().insert({ user_id: userId, video_id: vidId });

        res.status(200).json({
            response: 'successfull',
        });
    }
);

export const deleteFavorite = asyncWrap(
    async (req: Request, res: Response, next: NextFunction) => {
        const { username, videoId, token } = req.body;

        const user = await checkToken(token, username);
        if (!user) {
            return next(createAuthError());
        }

        const { userId, vidId } = await getIds(username, videoId);

        await Favorites.query()
            .delete()
            .where({ user_id: userId, video_id: vidId });

        res.status(200).json({ response: 'successfull' });
    }
);

export const getAllFavorites = asyncWrapper(
    async (req: Request, res: Response, next: NextFunction) => {
        const { username, token } = req.body;

        const user = await checkToken(token, username);
        if (!user) {
            return next(createAuthError());
        }

        const useR = await knex
            .select('id')
            .from<User>('users')
            .where('username', username);
        const userId = useR[0].id;

        const likedIds = await Favorites.query().where({ user_id: userId });

        const promises = likedIds.map(async (fav) => {
            const id = fav.video_id;
            const video = await Video.query().findOne({ id: id });

            return {
                etag: video?.etag,
                id: {
                    videoId: video?.videoId,
                    name: video?.name,
                },
            };
        });
        const favorites = await Promise.all(promises);

        res.status(200).json({
            response: 'successfull',
            data: { favorites },
        });
    }
);

export const search = asyncWrapper(
    async (req: Request, res: Response, next: NextFunction) => {
        const { q, token, username } = req.body;

        const user = await checkToken(token, username);
        if (!user) {
            return next(createAuthError());
        }

        // Search the db
        const resultDb = await Video.query().where('name', 'like', `%${q}%`);

        // API connection to Youtube
        if (resultDb.length > 0) {
            const searchResult = resultDb.map((video) => ({
                etag: video.etag,
                id: {
                    videoId: video.videoId,
                    name: video.name,
                },
            }));
            return res.status(200).json({
                response: 'successfull',
                data: {
                    videos: searchResult,
                },
            });
        } else {
            const response = await fetch(
                `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=${q}&relevanceLanguage=en&type=video&videoEmbeddable=true&key=${process.env.API_KEY}`
            );
            const data = await response.json();
            const items: VideoResult[] = data.items;

            // Insert only if video is not already in.
            const promises = items.map(async (item) => {
                const videoInDb = await Video.query().where('videoId', item.id.videoId);

                if (!videoInDb) {
                    const toInsert = {
                        etag: item.etag,
                        videoId: item.id.videoId,
                        name: item.snippet.title,
                    };
                    await Video.query().insert(toInsert);
                }
                return {
                    etag: item.etag,
                    id: {
                        videoId: item.id.videoId,
                        name: item.snippet.title,
                    },
                };
            });
            const searchResult = await Promise.all(promises);

            return res.status(201).json({
                response: 'successfull',
                data: {
                    videos: searchResult,
                },
            });
        }
    }
);

export const signup = asyncWrapper(async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    const newUser = {
        username,
        email,
        password,
        token: jwt.sign({ email, username }, secret, {
            expiresIn: 60 * 10,
        }),
    };

    await User.query().insert(newUser);

    res.status(200).json({
        response: 'successfull',
        data: {
            token: newUser.token,
            username,
        },
    });
});

export const login = asyncWrapper(
    async (req: Request, res: Response, next: NextFunction) => {
        const { username, password } = req.body;

        const user = await User.query().findOne({ username });

        if (!user || !bcrypt.compareSync(password, user.password)) {
            return next(createCustomError(401, 'Incorrect username or password.'));
        } else if (user && bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign({ email: user.email, username }, secret, {
                expiresIn: 60 * 10,
            });

            await User.query().update({ token: token }).where({ username });

            return res.status(200).json({
                response: 'successfull',
                data: { token },
            });
        }
    }
);

export const logout = asyncWrap(
    async (req: Request, res: Response, next: NextFunction) => {
        const { username } = req.body;

        const user = await User.query()
            .update({ token: '' })
            .where('username', username);

        if (!user) {
            return next(createAuthError());
        }

        res.status(200).json({ response: 'successfull' });
    }
);
