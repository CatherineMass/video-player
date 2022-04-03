import { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('vaccine', (table: Knex.TableBuilder) => {
        table.increments('id');
        table.string('name');
        table.string('phone').unique();
        table.string('price');
        table.string('website').unique();
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('vaccine');
}

