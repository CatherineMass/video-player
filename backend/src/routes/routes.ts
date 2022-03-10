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

interface VideoItem {
    etag: string;
    id: {
        videoId: string;
        name: string;
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
    // Limit of 2 videos is just for now. Will increase it once the feature is working.
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=portugal&relevanceLanguage=en&type=video&videoEmbeddable=true&key=${process.env.API_KEY}`);
    const data = await response.json();
    const items: Item[] = data.items;
    
    const results = async (items: Item[]) => {
        const searchResult: VideoItem[] = [];
        for (let i = 0; i < items.length; i++) {
            const toInsert = {
                etag: items[i].etag, 
                videoId: items[i].id.videoId, 
                name: items[i].snippet.title
            };
            await Video.query().insert(toInsert);
            searchResult.push({
                etag: items[i].etag,
                id: {
                    videoId: items[i].id.videoId,
                    name: items[i].snippet.title,
                }
            });
        }
        return searchResult;
    };

    const toSend = results(items);
    return res.send(toSend);

    // const resul = items.map(async item => {
    //     const toInsert = {
    //         etag: item.etag, 
    //         videoId: item.id.videoId, 
    //         name: item.snippet.title
    //     };
    //     await Video.query().insert(toInsert);
    //     return {
    //         etag: item.etag,
    //         id: {
    //             videoId: item.id.videoId,
    //             name: item.snippet.title,
    //         }
    //     };
    // });


    // save to database
    // const result = items.map(item => {
    //     Video.query().insertAndFetch({
    //         etag: item.etag, 
    //         videoId: item.id.videoId, 
    //         name: item.snippet.title
    //     });
    // });
    // return res.send(result);

    // await Video.query().insert(videosInsert);

    // send result    
    // const searchResult = items.map(item => ({
    //     etag: item.etag,
    //     id: {
    //         videoId: item.id.videoId,
    //         name: item.snippet.title,
    //     }
    // }));
    // return res.send(searchResult);
});

export default router;
