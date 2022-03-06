import { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('videos', (table: Knex.TableBuilder) => {
        table.increments('id');
        table.string('etag').notNullable().unique();
        table.string('videoId').notNullable().unique();
        table.string('name');
        table.timestamps(true, true);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('videos');
}

