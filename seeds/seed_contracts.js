/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Truncate contracts table with CASCADE to automatically remove related payments
  await knex.raw('TRUNCATE TABLE contracts RESTART IDENTITY CASCADE');


  // Insert seed data for contracts (ensuring each user has at least 1 contract)
  await knex('contracts').insert([
    // User 21 contracts
    { id: 1, user_id: 21, company: 'Tech Corp', hours_contracted: 40, status: 'active', start_date: '2024-01-01', end_date: '2024-02-01' },

    // User 22 contracts
    { id: 2, user_id: 22, company: 'Blockchain Labs', hours_contracted: 50, status: 'completed', start_date: '2023-11-01', end_date: '2023-12-01' },

    // User 23 contracts
    { id: 3, user_id: 23, company: 'BuildIt Ltd', hours_contracted: 60, status: 'active', start_date: '2024-02-01', end_date: '2024-03-01' },

    // User 24 contracts
    { id: 4, user_id: 24, company: 'Fintech Innovations', hours_contracted: 45, status: 'completed', start_date: '2023-10-15', end_date: '2023-11-30' },
    { id: 5, user_id: 24, company: 'Green Energy', hours_contracted: 30, status: 'active', start_date: '2024-02-01', end_date: null },  // Ongoing

    // User 25 contracts
    { id: 6, user_id: 25, company: 'AI Solutions', hours_contracted: 70, status: 'active', start_date: '2024-01-10', end_date: '2024-02-15' },

    // User 26 contracts
    { id: 7, user_id: 26, company: 'Blockchain Ventures', hours_contracted: 50, status: 'completed', start_date: '2023-09-01', end_date: '2023-11-15' },

    // User 27 contracts
    { id: 8, user_id: 27, company: 'EduTech Solutions', hours_contracted: 55, status: 'active', start_date: '2024-01-20', end_date: '2024-03-01' },

    // User 28 contracts
    { id: 9, user_id: 28, company: 'FinTech Labs', hours_contracted: 65, status: 'active', start_date: '2024-01-15', end_date: '2024-02-28' },

    // User 29 contracts
    { id: 10, user_id: 29, company: 'Tech Innovations', hours_contracted: 35, status: 'completed', start_date: '2023-12-01', end_date: '2023-12-31' },

    // User 30 contracts
    { id: 11, user_id: 30, company: 'AI Labs', hours_contracted: 45, status: 'completed', start_date: '2023-10-01', end_date: '2023-12-01' },

    // Adding contracts for the remaining users (31 to 40)
    { id: 12, user_id: 31, company: 'NextGen Tech', hours_contracted: 50, status: 'active', start_date: '2024-01-01', end_date: '2024-03-01' },
    { id: 13, user_id: 32, company: 'HealthTech Ltd', hours_contracted: 60, status: 'completed', start_date: '2023-11-01', end_date: '2023-12-15' },
    { id: 14, user_id: 33, company: 'Design Studio', hours_contracted: 30, status: 'active', start_date: '2024-02-01', end_date: null },  // Ongoing
    { id: 15, user_id: 34, company: 'AI Solutions', hours_contracted: 40, status: 'active', start_date: '2024-01-15', end_date: '2024-02-15' },
    { id: 16, user_id: 35, company: 'EduTech Innovations', hours_contracted: 45, status: 'completed', start_date: '2023-09-01', end_date: '2023-12-01' },
    { id: 17, user_id: 36, company: 'GreenTech Ventures', hours_contracted: 55, status: 'active', start_date: '2024-01-10', end_date: '2024-03-01' },
    { id: 18, user_id: 37, company: 'Quantum Research', hours_contracted: 60, status: 'completed', start_date: '2023-10-01', end_date: '2023-12-01' },
    { id: 19, user_id: 38, company: 'TechWorld', hours_contracted: 35, status: 'active', start_date: '2024-01-01', end_date: null },  // Ongoing
    { id: 20, user_id: 39, company: 'Smart Innovations', hours_contracted: 50, status: 'completed', start_date: '2023-12-01', end_date: '2023-12-31' },
    { id: 21, user_id: 40, company: 'AI Innovators', hours_contracted: 45, status: 'active', start_date: '2024-01-01', end_date: '2024-02-15' }
  ]);
};