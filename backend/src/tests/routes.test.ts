import express, { Application } from 'express';
import dotenv from 'dotenv';
// import {raw} from 'objection';
// import config from '../../knexfile';
// import Knex from 'knex';
// import { Model } from 'objection';
import request from 'supertest';
import router from '../routes/routes';

dotenv.config();
const app: Application = express();

// use youtube_db_test
// create it in beforeEach + migration + seeds
// drop it after test is done

describe('GET /', () => {
    // beforeEach(async () => {
    //     const knex = Knex(
    //         config[process.env.NODE_ENV ? process.env.NODE_ENV : 'test']
    //     );
    //     Model.knex(knex);
    // });

    // afterEach(async () => {
    // 	const knex = Knex(config.development);
    // 	await knex.destroy();
    // });

    describe('get all the videos from the database', () => {
        it('should respond with a 200 status code', async () => {
            const response = await request(app.use(router)).get('/videos');
            expect(response.statusCode).toBe(200);
        });
    });
});


// ==> need a global setup (that creates a test db, connection, migration, seed) & global teardown (drops the test db)
