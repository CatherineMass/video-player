import express, { Application } from 'express';
// import knex from 'knex';
import {raw} from 'objection';
import request from 'supertest';
// import Video from '../models/video';
import router from '../routes/routes';

const app: Application = express();
// const knex = Video.knex();

describe('GET /', () => { 
	describe('get all the videos from the database', () => { 
		test('should respond with a 200 status code', async () => {
			const response = await request(app.use(router)).get('/');
			expect(response.statusCode).toBe(200);
		});
		afterAll(async () => {
			await raw('\\c postgres');
		});

	});
});

// ==> need a global setup (that creates a test db, connection, migration, seed) & global teardown (drops the test db)