import router from './routes/routes';
import { app } from './routes/routes';
import Knex from 'knex';
import config from '../knexfile';
import { Model } from 'objection';

// Initialize knex
const knex = Knex(config.development);

// Give the knex instance to Objection
Model.knex(knex);

app.use('/api/v1', router);

app.listen(3005, () => {
    console.log('App is listening at http://localhost:3005/api/v1/videos...');  
});
