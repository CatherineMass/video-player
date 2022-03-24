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

router.route('/search').post(async (req: Request, res: Response) => {
    const { q } = req.body;

    // Search the db. If not found, api call. ==> res either with what is in db or rsponse from youtube.
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
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=${q}&relevanceLanguage=en&type=video&videoEmbeddable=true&key=${process.env.API_KEY}`
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
            expiresIn: 60 * 3,
        })
    };

    await User.query().insert(newUser);
    
    return res.status(200).json({ username });
});

router.route('/login').post(async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        const user = await User.query().findOne({ username });

        if (user && bcrypt.compareSync(password, user.password)) {
            // const token = jwt.sign()
            return res.status(200).json({ message: 'Login successfull' });
        }
    } catch (err) {
        console.log(err);
    }
    return res.status(401).json({ message: 'Incorrect username or password' });
});

// router.route('/users/:id').get ==> logout.
// router.route('/users/:id').patch ==> update.
// router.route('/users/:id').delete ==> delete account.


export default router;
