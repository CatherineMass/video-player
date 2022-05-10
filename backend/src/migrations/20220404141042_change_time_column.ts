import { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
    return knex.schema.dropTable('time');
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.createTable('time', (table: Knex.TableBuilder) => {
        table.increments('id');
        table.string('08:00');
        table.string('09:00');
        table.string('10:00');
        table.string('11:00');
        table.string('12:00');
        table.string('13:00');
        table.string('14:00');
        table.string('15:00');
        table.string('16:00');
    });
}

