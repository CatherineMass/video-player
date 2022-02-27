import { Model } from 'objection';

class Video extends Model {
	static get tableName() {
		return 'videos';
	}

	static get idColumn() {
		return 'id';
	}

	static get jsonSchema() {
		return {
			type: 'object',
			properties: {
				kind: { type: 'string' },
				etag: { type: 'string' },
				id: {
					type: 'object',
					properties: {
						kind: { type: 'string' },
						videoId: { type: 'string' },
						name: { type: 'string' },
					},
				},
			},
		};
	}
}

export default Video;
