import express, { Application, Router, Request, Response } from 'express';
// import Knex from 'knex';
// import config from '../../knexfile';
// import { Model } from 'objection';
import Video from '../models/video';

// // Initialize knex
// const knex = Knex(config.development);

// // // Give the knex instance to Objection
// Model.knex(knex);

export const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router: Router = express.Router();

router
	.route('/videos')
	.get(async (req: Request, res: Response) => {
		const videos = await Video.query();
	
	
		return res.status(200).send(videos);
	});

export default router;