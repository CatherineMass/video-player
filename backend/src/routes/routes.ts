import cors from 'cors';
import express, { Application, Router, Request, Response } from 'express';
import Knex from 'knex';
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

router.route('/search').get(async (req: Request, res: Response) => {
    // const {q} = req.query; // where q is the search term that you would send from the frontend as well

    // API connection to Youtube
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=sweden&type=video&videoEmbeddable=true&key=${process.env.API_KEY}`);
    const data = await response.json();
    const items: Item[] = data.items;
    
    const searchResult = items.map(item => ({
        etag: item.etag,
        id: {
            videoId: item.id.videoId,
            name: item.snippet.title,
        }
    }));
    return res.send(searchResult);

    // save to database

    // send result
});

export default router;
