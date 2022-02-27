import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex('videos').del();

	const video = {
		kind: 'abc',
		etag: 'def',
		id: {
			kind: 'ghi',
			videoId: '_jkl',
			name: 'mno video',
		},
	};

	// Inserts seed entries
	await knex('videos').insert([
		{
			video: JSON.stringify(video),
		},
	]);
}
