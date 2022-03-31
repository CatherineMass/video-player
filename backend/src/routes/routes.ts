import cors from 'cors';
import express, { Application, Router } from 'express';
import { addFavorite, deleteFavorite, getAllFavorites, getAllVideos, login, logout, search, signup } from '../controllers/videos';

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

// Add middleware to format data that go to the frontend.
// Add error handling.
// Middleware for error handling/ try-catch.

router.route('/videos').get(getAllVideos);

router.route('/favorites').post(addFavorite).delete(deleteFavorite);

router.route('/getfavorites').post(getAllFavorites);

router.route('/search').post(search);

router.route('/signup').post(signup);

router.route('/login').post(login);

router.route('/logout').post(logout);

export default router;
