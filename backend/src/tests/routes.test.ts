import express, { Application } from 'express';
import request from 'supertest';
import router from '../routes/routes';

const app: Application = express();

describe('GET /', () => { 
	describe('get all the videos from the database', () => { 
		test('should respond with a 200 status code', async () => {
			const response = await request(app.use(router)).get('/');
			expect(response.statusCode).toBe(200);
		});
	});
});