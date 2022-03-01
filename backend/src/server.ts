import express, { Application } from 'express';
import Knex from 'knex';
import KnexConfig from '../knexfile';
import { Model } from 'objection';
import router from './routes/routes';

// Call data from youtube api.
// Parse the response.
// Post it in db.

// Initialize knex
const knex = Knex(KnexConfig.development);

// Give the knex instance to Objection
Model.knex(knex);

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', router);


app.listen(5000, () => {
	console.log('App is listening at http://localhost:5000...');  
});
