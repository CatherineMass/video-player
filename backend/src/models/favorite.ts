import { Model } from 'objection';

class Favorites extends Model {
    user_id!: number;
    video_id!: number;
	
    static get tableName() {
        return 'favorites';
    }

    static get idColumn() {
        return 'id';
    }
}

export default Favorites;