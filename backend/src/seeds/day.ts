import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('day').del();

    // Inserts seed entries
    await knex('day').insert([
        {
            'day1': '1',
            'day2': '2',
            'day3': '3',
            'day4': '4',
            'day5': '5',
            'day6': '6',
            'day7': '7',
            'day_id': '1',
        },
        {
            'day1': '7',
            'day2': '6',
            'day3': '5',
            'day4': '4',
            'day5': '3',
            'day6': '2',
            'day7': '1',
            'day_id': '2',
        },
        {
            'day1': '1',
            'day2': '7',
            'day3': '2',
            'day4': '6',
            'day5': '3',
            'day6': '5',
            'day7': '4',
            'day_id': '3',
        },
        {
            'day1': '2',
            'day2': '4',
            'day3': '6',
            'day4': '1',
            'day5': '3',
            'day6': '5',
            'day7': '7',
            'day_id': '4',
        },
        {
            'day1': '5',
            'day2': '6',
            'day3': '7',
            'day4': '3',
            'day5': '4',
            'day6': '1',
            'day7': '2',
            'day_id': '5',
        },
    ]);
}
