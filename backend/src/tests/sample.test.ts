import request from 'supertest';
// import describe from 'supertest';
import routes from '../routes/routes';

describe('GET /', () => {
	describe('get all the data from the db', () => {
		test('should respond with a 200 status code', async () => {
			const response = await request(routes).get('/');
			expect(response.statusCode).toBe(200);
		});
	});
});