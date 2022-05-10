import { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable('vaccine', (table: Knex.TableBuilder) => {
        table.string('day_id');
    });

    await knex.schema.createTable('day', (table: Knex.TableBuilder) => {
        table.increments('id');
        table.string('day1');
        table.string('day2');
        table.string('day3');
        table.string('day4');
        table.string('day5');
        table.string('day6');
        table.string('day7');
    });

    await knex.schema.createTable('time', (table: Knex.TableBuilder) => {
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


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('time');
    await knex.schema.dropTable('day');
    await knex.schema.table('vaccine', (table: Knex.TableBuilder) => {
        table.dropColumn('day_id');
    });
}

