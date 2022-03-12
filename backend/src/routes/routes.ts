import cors from 'cors';
import express, { Application, Router, Request, Response } from 'express';
import Knex from 'knex';
// import whereLike from 'knex';
import fetch from 'node-fetch';
import config from '../../knexfile';
import { Model } from 'objection';
import Video from '../models/video';

interface Item {
    etag: string;
    id: {
        videoId: string;
    }
    snippet: {
        title: string;
    }
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

const router: Router = express.Router();

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
    // Limit of 2 videos is just for now. Will increase it once the feature is working.
    if (resultDb.length > 0) {
        return res.status(200).json(resultDb);
    } else {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=${q}&relevanceLanguage=en&type=video&videoEmbeddable=true&key=${process.env.API_KEY}`);
        const data = await response.json();
        const items: Item[] = data.items;
        
        // Insert only if video is not already in.
        const promises = items.map(async item => {
            const toInsert = {
                etag: item.etag, 
                videoId: item.id.videoId, 
                name: item.snippet.title
            };
            await Video.query().insert(toInsert);
            return {
                etag: item.etag,
                id: {
                    videoId: item.id.videoId,
                    name: item.snippet.title,
                },
            };
        });
        const searchResult = await Promise.all(promises);   

        return res.status(201).json(searchResult);
    }
});

export default router;
