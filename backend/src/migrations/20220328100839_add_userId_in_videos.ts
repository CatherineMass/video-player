import { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable('videos', (table: Knex.TableBuilder) => {
        table.integer('user_id').references('id').inTable('users');
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.table('videos', (table: Knex.TableBuilder) => {
        table.dropColumn('user_id');
    });
}

