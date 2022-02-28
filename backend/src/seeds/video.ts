import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex('videos').del();

	// Inserts seed entries
	await knex('videos').insert([
		{
			etag: 'def',
			videoId: '_jkl',
			name: 'mno video',
		},
	]);
}
