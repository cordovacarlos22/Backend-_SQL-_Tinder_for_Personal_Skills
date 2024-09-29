/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Truncate the payments table to remove existing entries and reset primary key
  await knex('payments').truncate();

  // Insert seed data for payments (matching each payment to its respective contract)
  await knex('payments').insert([
    // Payments for User 21 contract
    { id: 1, contract_id: 1, amount: 1000.00, payment_date: '2024-01-10' },
    { id: 2, contract_id: 1, amount: 500.00, payment_date: '2024-01-25' },

    // Payments for User 22 contract
    { id: 3, contract_id: 2, amount: 2000.00, payment_date: '2023-11-15' },
    { id: 4, contract_id: 2, amount: 1000.00, payment_date: '2023-12-01' },

    // Payments for User 23 contract
    { id: 5, contract_id: 3, amount: 3000.00, payment_date: '2024-02-05' },
    { id: 6, contract_id: 3, amount: 1500.00, payment_date: '2024-02-20' },

    // Payments for User 24 contracts
    { id: 7, contract_id: 4, amount: 2000.00, payment_date: '2023-10-30' },  // Completed contract
    { id: 8, contract_id: 5, amount: 1000.00, payment_date: '2024-02-05' },  // Ongoing contract

    // Payments for User 25 contract
    { id: 9, contract_id: 6, amount: 3500.00, payment_date: '2024-01-25' },
    { id: 10, contract_id: 6, amount: 1500.00, payment_date: '2024-02-10' },

    // Payments for User 26 contract
    { id: 11, contract_id: 7, amount: 4000.00, payment_date: '2023-10-15' },
    { id: 12, contract_id: 7, amount: 3000.00, payment_date: '2023-11-01' },

    // Payments for User 27 contract
    { id: 13, contract_id: 8, amount: 2800.00, payment_date: '2024-01-30' },
    { id: 14, contract_id: 8, amount: 1500.00, payment_date: '2024-02-15' },

    // Payments for User 28 contract
    { id: 15, contract_id: 9, amount: 3200.00, payment_date: '2024-01-20' },
    { id: 16, contract_id: 9, amount: 1500.00, payment_date: '2024-02-10' },

    // Payments for User 29 contract
    { id: 17, contract_id: 10, amount: 1800.00, payment_date: '2023-12-10' },
    { id: 18, contract_id: 10, amount: 1000.00, payment_date: '2023-12-31' },

    // Payments for User 30 contract
    { id: 19, contract_id: 11, amount: 2500.00, payment_date: '2023-10-20' },
    { id: 20, contract_id: 11, amount: 2000.00, payment_date: '2023-11-30' },

    // Payments for User 31 contract
    { id: 21, contract_id: 12, amount: 3000.00, payment_date: '2024-01-15' },
    { id: 22, contract_id: 12, amount: 2500.00, payment_date: '2024-02-10' },

    // Payments for User 32 contract
    { id: 23, contract_id: 13, amount: 3500.00, payment_date: '2023-11-10' },
    { id: 24, contract_id: 13, amount: 2500.00, payment_date: '2023-12-10' },

    // Payments for User 33 contract
    { id: 25, contract_id: 14, amount: 2800.00, payment_date: '2024-02-10' },

    // Payments for User 34 contract
    { id: 26, contract_id: 15, amount: 4000.00, payment_date: '2024-01-30' },

    // Payments for User 35 contract
    { id: 27, contract_id: 16, amount: 3000.00, payment_date: '2023-10-01' },
    { id: 28, contract_id: 16, amount: 2000.00, payment_date: '2023-12-01' },

    // Payments for User 36 contract
    { id: 29, contract_id: 17, amount: 3500.00, payment_date: '2024-02-05' },
    { id: 30, contract_id: 17, amount: 1500.00, payment_date: '2024-03-01' },

    // Payments for User 37 contract
    { id: 31, contract_id: 18, amount: 3200.00, payment_date: '2023-11-10' },
    { id: 32, contract_id: 18, amount: 1800.00, payment_date: '2023-12-01' },

    // Payments for User 38 contract
    { id: 33, contract_id: 19, amount: 3000.00, payment_date: '2024-01-10' },
    { id: 34, contract_id: 19, amount: 1500.00, payment_date: '2024-02-01' },

    // Payments for User 39 contract
    { id: 35, contract_id: 20, amount: 3500.00, payment_date: '2023-12-15' },
    { id: 36, contract_id: 20, amount: 2000.00, payment_date: '2023-12-30' },

    // Payments for User 40 contract
    { id: 37, contract_id: 21, amount: 4000.00, payment_date: '2024-01-15' },
    { id: 38, contract_id: 21, amount: 2000.00, payment_date: '2024-02-01' }
  ]);
};