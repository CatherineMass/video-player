import { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable('vaccine', (table: Knex.TableBuilder) => {
        table.dropColumn('lng');
        table.dropColumn('lat');

    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.table('vaccine', (table: Knex.TableBuilder) => {
        table.integer('lat');
        table.integer('lng');
    });
}

