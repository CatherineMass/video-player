import Knex from 'knex';
import { Model } from 'objection';
import config from '../knexfile';
import User from './models/user';
import Video from './models/video';

// // Initialize knex
const knex = Knex(config.development);

// // // Give the knex instance to Objection
Model.knex(knex);

export const checkToken = async (token: string, username: string) => {
    const user = await User.query().findOne({ token, username });
    return user;
};

export const getIds = async (username: string, videoId: string) => {
    const user = await knex
        .select('id')
        .from<User>('users')
        .where('username', username);
    const userId = user[0].id;
    const video = await knex
        .select('id')
        .from<Video>('videos')
        .where('videoId', videoId);
    const vidId = video[0].id;

    return { userId, vidId };
};
