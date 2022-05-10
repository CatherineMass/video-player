import { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable('day', (table: Knex.TableBuilder) => {
        table.string('day_id');
    });
    await knex.schema.alterTable('time', (table: Knex.TableBuilder) => {
        table.string('time_id');
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.table('time', (table: Knex.TableBuilder) => {
        table.dropColumn('time_id');
    });
    await knex.schema.table('day', (table: Knex.TableBuilder) => {
        table.dropColumn('day_id');
    });
}

