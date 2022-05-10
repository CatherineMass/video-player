import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('time').del();

    // Inserts seed entries
    await knex('time').insert([
        {
            '08_00': 'true',
            '09_00': 'true',
            '10_00': 'true',
            '11_00': 'true',
            '12_00': 'true',
            '13_00': 'true',
            '14_00': 'true',
            '15_00': 'true',
            '16_00': 'true',
            'time_id': '1',
        },
        {
            '08_00': 'true',
            '09_00': 'false',
            '10_00': 'true',
            '11_00': 'true',
            '12_00': 'true',
            '13_00': 'false',
            '14_00': 'false',
            '15_00': 'true',
            '16_00': 'false',
            'time_id': '2',
        },
        {
            '08_00': 'true',
            '09_00': 'false',
            '10_00': 'true',
            '11_00': 'true',
            '12_00': 'false',
            '13_00': 'true',
            '14_00': 'false',
            '15_00': 'true',
            '16_00': 'false',
            'time_id': '3',
        },
        {
            '08_00': 'false',
            '09_00': 'false',
            '10_00': 'true',
            '11_00': 'false',
            '12_00': 'false',
            '13_00': 'true',
            '14_00': 'false',
            '15_00': 'false',
            '16_00': 'true',
            'time_id': '4',
        },
        {
            '08_00': 'true',
            '09_00': 'false',
            '10_00': 'true',
            '11_00': 'false',
            '12_00': 'true',
            '13_00': 'false',
            '14_00': 'true',
            '15_00': 'false',
            '16_00': 'true',
            'time_id': '5',
        },
        {
            '08_00': 'false',
            '09_00': 'false',
            '10_00': 'false',
            '11_00': 'false',
            '12_00': 'false',
            '13_00': 'true',
            '14_00': 'true',
            '15_00': 'true',
            '16_00': 'true',
            'time_id': '6',
        },
        {
            '08_00': 'true',
            '09_00': 'true',
            '10_00': 'false',
            '11_00': 'true',
            '12_00': 'true',
            '13_00': 'true',
            '14_00': 'false',
            '15_00': 'false',
            '16_00': 'false',
            'time_id': '7',
        },
    ]);
}