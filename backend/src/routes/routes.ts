import cors from 'cors';
import express, { Application, Router, Request, Response } from 'express';
import Knex from 'knex';
import config from '../../knexfile';
import { Model } from 'objection';
import Video from '../models/video';

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

app.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=sweden&type=video&videoEmbeddable=true&key=${process.env.API_KEY}`, (req: Request, res: Response) => {
    
});


// router.route('/youtube').get(async (req: Request, res: Response) => {


// });

export default router;
