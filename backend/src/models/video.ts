import { Model } from 'objection';

class Video extends Model {
    etag!: string;
    videoId!: string;
    name!: string;
    user_id!: string;
	
    static get tableName() {
        return 'videos';
    }

    static get idColumn() {
        return 'id';
    }
}

export default Video;
