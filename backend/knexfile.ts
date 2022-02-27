import dotenv from 'dotenv';
dotenv.config();

interface KnexConfig {
  [key: string]: object;
}

const knexConfig: KnexConfig = {

	development: {
		client: 'postgresql',
		connection: {
			database: 'my_youtube_db',
			user:     'postgres',
			password: process.env.DB_PASSWORD,
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	}
};

export default knexConfig;
