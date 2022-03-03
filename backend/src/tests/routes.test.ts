import express, { Application } from 'express';
// import {raw} from 'objection';
import config from '../../knexfile';
import Knex from 'knex';
import { Model } from 'objection';
import request from 'supertest';
import router from '../routes/routes';

// const dev = Knex(config.development);
// const client = dev.client.config.client;
// console.log(dev.client.config.client);

const app: Application = express();

describe('GET /', () => { 
	beforeEach(async () => {
		const knex = Knex(config.development);
		Model.knex(knex);
	});

	afterEach(async () => {
		const knex = Knex(config.development);
		await knex.destroy();
	});

	describe('get all the videos from the database', () => { 
		test('should respond with a 200 status code', async () => {
			const response = await request(app.use(router)).get('/');
			expect(response.statusCode).toBe(200);
		});
	});
});

// ==> need a global setup (that creates a test db, connection, migration, seed) & global teardown (drops the test db)