import { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('favorites', (table: Knex.TableBuilder) => {
        table.increments('id');
        table.integer('user_id').references('id').inTable('users');
        table.integer('video_id').references('id').inTable('videos');
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('favorites');
}

