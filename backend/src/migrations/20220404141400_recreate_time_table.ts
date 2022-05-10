import { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('time', (table: Knex.TableBuilder) => {
        table.increments('id');
        table.string('08_00');
        table.string('09_00');
        table.string('10_00');
        table.string('11_00');
        table.string('12_00');
        table.string('13_00');
        table.string('14_00');
        table.string('15_00');
        table.string('16_00');
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('time');
}

