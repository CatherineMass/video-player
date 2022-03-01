import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex('videos').del();

	// Inserts seed entries
	await knex('videos').insert([
		{
			etag: 'tamwb8xWafaFK3WYUiRjWVPKOCM',
			videoId: '_3ngiSxVCBs',
			name: 'a nice video',
		},
		{
			etag: 'n9DniKGa4RMTCv9hs3aOcxsSzPY',
			videoId: '3zTR4ayDG38',
			name: 'a cool video',
		},
		{
			etag: 'I_vfY1pIPWvk49XZ_WWkBynL88U',
			videoId: 'aSJUS2tymZA',
			name: 'a fantastic video',
		},
		{
			etag: 'fVwysHySGlQcaVwDLkjtP1DDWFk',
			videoId: '6zEIvZqs0-Y',
			name: 'yet another cool video',
		},
		{
			etag: 'lw9CuIh2Zla8HqQdq78u4sTaVIk',
			videoId: 'pJuq8D1NGJQ',
			name: 'encore another video',
		}
	]);
}
