import dotenv from 'dotenv';
import type { Knex } from 'knex';
dotenv.config();

// interface KnexConfig {
//   [key: string]: object;
// }

const config: { [key: string]: Knex.Config } = {
	local: {
		client: 'postgresql',
		connection: {
			host: 'localhost',
			database: 'youtube_db',
			user: 'postgres',
			password: process.env.DB_PASSWORD,
			port: 5432,
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: 'knex_migrations',
			directory: __dirname+'/src/migrations',
		},
	},

	development: {
		client: 'postgresql',
		connection: {
			database: 'youtube_db',
			user:     'postgres',
			password: process.env.DB_PASSWORD,
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations',
			directory: __dirname+'/src/migrations',
		},
		seeds: {
			directory: __dirname+'/src/seeds',
		}
	},

	production: {
		client: 'postgresql',
		connection: {
			database: 'youtube_db',
			user:     'postgres',
			password: process.env.DB_PASSWORD,
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations',
			directory: __dirname+'/src/migrations',
		},
		seeds: {
			directory: __dirname+'/src/seeds',
		}
	},
};

export default config;
