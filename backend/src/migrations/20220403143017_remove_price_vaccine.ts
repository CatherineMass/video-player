import { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
    return knex.schema.table('vaccine', (table: Knex.TableBuilder) => {
        table.dropColumn('price');
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.table('vaccine', (table: Knex.TableBuilder) => {
        table.string('price');
    });
}

