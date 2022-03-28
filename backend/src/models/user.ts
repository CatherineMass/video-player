import { Model, RelationMappings, RelationMappingsThunk } from 'objection';
import bcrypt from 'bcrypt';
import Video from './video';

class User extends Model {
    username!: string;
    email!: string;
    password!: string;
    token!: string;
	
    static get tableName() {
        return 'users';
    }

    static get idColumn() {
        return 'id';
    }

    static relationMappings: RelationMappings | RelationMappingsThunk = {
        favoriteVideos: {
            relation: Model.HasManyRelation,
            modelClass: Video,
            join: {
                from: 'users.id',
                to: 'videos.user_id'
            }
        } 
    };

    $beforeInsert(): void | Promise<any> {
        this.password = bcrypt.hashSync(this.password, 14);
    }
}

export default User;