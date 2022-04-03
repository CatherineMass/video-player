import { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable('vaccine', (table: Knex.TableBuilder) => {
        table.string('lat');
        table.string('lng');
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.table('vaccine', (table: Knex.TableBuilder) => {
        table.dropColumn('lng');
        table.dropColumn('lat');
    });
}

