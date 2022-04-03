import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('vaccine').del();

    // Inserts seed entries
    await knex('vaccine').insert([
        {
            name: 'Vaccin Direkt',
            phone: '0800000000',
            website: 'vaccindirekt.se',
            lat: '59.32189',
            lng: '18.0737124',
        },
        {
            name: 'Min Doktor',
            phone: '0800000001',
            website: 'mindoktor.se',
            lat: '59.3549516',
            lng: '17.9532463',
        },
        {
            name: 'Svea Vaccin',
            phone: '0800000002',
            website: 'sveavaccin.se',
            lat: '59.2428846',
            lng: '18.093324',
        },
        {
            name: 'Capio Vårdcentral',
            phone: '0800000003',
            website: 'capio.se',
            lat: '59.2968',
            lng: '18.0313',
        },
        {
            name: 'Kry',
            phone: '0800000004',
            website: 'kry.se',
            lat: '59.3329396',
            lng: '18.0758679',
        },
    ]);
}
