import express, { Router, Request, Response } from 'express';
import Video from '../models/video';

const router: Router = express.Router();


router
	.route('/')
	.get(async (req: Request, res: Response) => {
		const videos = await Video.query();
	
	
		return res.send(videos);
	});

export default router;