import { Model } from 'objection';

class Facility extends Model {
    name!: string;
    phone!: string;
    website!: string;
    lat!: string;
    lng!: string;

    static get tableName() {
        return 'vaccine';
    }

    static get idColumn() {
        return 'id';
    }
}

export default Facility;