import { Request, Response } from 'express';
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

export const getAllVideos = asyncWrap(async (req: Request, res: Response) => {
    const { token, username } = req.body;

    const user = await checkToken(token, username);

    if (user) {
        const videos = await Video.query();
        const resVideos = videos.map((video) => ({
            etag: video.etag,
            id: {
                videoId: video.videoId,
                name: video.name,
            },
        }));

        return res.status(200).json({ resVideos });
    } // else: error handler
});

export const addFavorite = asyncWrap(async (req: Request, res: Response) => {
    const { username, videoId, token } = req.body;

    const user = await checkToken(token, username);

    if(user) {
        const { userId, vidId } = await getIds(username, videoId);

        await Favorites.query().insert({user_id: userId, video_id: vidId});

        return res.json({ message: 'Favorite added' });
    }
    // } catch (err) {
    //     console.log(err);
    //     return res.status(400).json({ err, message: 'Something went wrong' });
    // }
});

export const deleteFavorite = asyncWrapper(async (req: Request, res: Response) => {
    const { username, videoId } = req.body;

    const { userId, vidId } = await getIds(username, videoId);

    await Favorites.query().delete().where({user_id: userId, video_id: vidId});

    return res.json({ message: 'Favorite removed' });
});

export const getAllFavorites = asyncWrapper(async (req: Request, res: Response) => {
    const { username } = req.body;

    const user = await knex.select('id').from<User>('users').where('username', username);
    const userId = user[0].id;

    const likedIds = await Favorites.query().where({user_id: userId});

    const promises = likedIds.map(async fav => {
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
      
    return res.status(200).json({ favorites });
});

export const search = asyncWrapper(async (req: Request, res: Response) => {
    const { q } = req.body;

    // Search the db. If not found, api call. ==> res either with what is in db or response from youtube.
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
        return res.status(200).json({ videos: searchResult });
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

        return res.status(201).json({ videos: searchResult });
    }
});

export const signup = asyncWrapper(async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
  
    const newUser = {
        username,
        email,
        password,
        token: jwt.sign({ email, username }, secret, {
            expiresIn: 60 * 10,
        })
    };

    await User.query().insert(newUser);
  
    return res.status(200).json({ token: newUser.token, username });
});

export const login = asyncWrap(async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const user = await User.query().findOne({ username });

    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ email: user.email, username }, secret, {
            expiresIn: 60 * 10,
        });

        await User.query().update({'token': token}).where({username});

        return res.status(200).json({ token, message: 'Login successfull' });
    }
    // } catch (err) {
    //     console.log(err);
    // }
    // return res.status(401).json({ message: 'Incorrect username or password' });
});

export const logout = asyncWrap(async (req: Request, res: Response) => {
    const { username } = req.body;

    const user = await User.query().update({ token: '' }).where('username', username);

    if (user) {
        return res.status(200).json({ message: 'Logout successfull' });
    }
});