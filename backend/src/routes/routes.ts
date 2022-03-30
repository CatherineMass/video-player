import cors from 'cors';
import express, { Application, Router, Request, Response } from 'express';
import Knex from 'knex';
import fetch from 'node-fetch';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import config from '../../knexfile';
import { Model } from 'objection';
import Video from '../models/video';
import User from '../models/user';
import Favorites from '../models/favorite';

interface VideoResult {
  etag: string;
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
  };
}

// // Initialize knex
const knex = Knex(config.development);

// // // Give the knex instance to Objection
Model.knex(knex);

export const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    credentials: true,
};
app.use(cors(corsOptions));

const secret: string = process.env.JWT_SECRET as string;
if (!secret) {
    throw new Error('You are missing a JWT secret in your environment');
}

const router: Router = express.Router();

// Add middleware to format data that go to the frontend.
// Add error handling.
// Middleware for error handling/ try-catch.
// Controllers? (like in task manager)

router.route('/videos').get(async (req: Request, res: Response) => {
    const videos = await Video.query();
    const resVideos = videos.map((video) => ({
        etag: video.etag,
        id: {
            videoId: video.videoId,
            name: video.name,
        },
    }));

    return res.status(200).json({ resVideos });
});

router.route('/favorites')
    .post(async (req: Request, res: Response) => {
        const { username, videoId } = req.body;

        try {
            const user = await knex.select('id').from<User>('users').where('username', username);
            const userId = user[0].id;
            const video = await knex.select('id').from<Video>('videos').where('videoId', videoId);
            const vidId = video[0].id;

            await Favorites.query().insert({user_id: userId, video_id: vidId});

            return res.json({ message: 'Favorite added' });
        } catch (err) {
            console.log(err);
            return res.status(400).json({ err, message: 'Something went wrong' });
        }
    })
    .delete(async (req: Request, res: Response) => {
        const { username, videoId } = req.body;

        try {
            const user = await knex.select('id').from<User>('users').where('username', username);
            const userId = user[0].id;
            const video = await knex.select('id').from<Video>('videos').where('videoId', videoId);
            const vidId = video[0].id;

            await Favorites.query().delete().where({user_id: userId, video_id: vidId});

            return res.json({ message: 'Favorite removed' });
        } catch (err) {
            console.log(err);
            return res.status(400).json({ err, message: 'Something went wrong' });
        }
    });

router.route('/getfavorites')
    .post(async (req: Request, res: Response) => {
        const { username } = req.body;
        try {
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
        } catch (err) {
            console.log(err);
            return res.status(400).json({ err, message: 'Something went wrong' });
        }
    });

router.route('/search').post(async (req: Request, res: Response) => {
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

router.route('/signup').post(async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    console.log(req.body);
    
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

router.route('/login')
    .post(async (req: Request, res: Response) => {
        const { username, password } = req.body;

        try {
            const user = await User.query().findOne({ username });

            if (user && bcrypt.compareSync(password, user.password)) {
                const token = jwt.sign({ email: user.email, username }, secret, {
                    expiresIn: 60 * 10,
                });

                await User.query().update({'token': token}).where({username});

                return res.status(200).json({ token, message: 'Login successfull' });
            }
        } catch (err) {
            console.log(err);
        }
        return res.status(401).json({ message: 'Incorrect username or password' });
    });

router.route('/logout')
    .post(async (req: Request, res: Response) => {
        const { username } = req.body;

        try {
            const user = await User.query().update({ token: '' }).where('username', username);

            if (user) {
                return res.status(200).json({ message: 'Logout successfull' });
            }
        } catch (err) {
            console.log(err);
        }
        return res.status(400).json({ message: 'Something went wrong' });
    });

// router.route('/users/:id').get ==> logout.
// router.route('/users/:id').patch ==> update.
// router.route('/users/:id').delete ==> delete account.


export default router;
