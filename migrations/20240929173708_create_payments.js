/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('payments').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('payments', function (table) {
        table.increments('id').primary();  // Auto-incrementing ID as the primary key
        table.integer('contract_id').unsigned().notNullable();  // Foreign key to the Contracts table
        table.decimal('amount', 10, 2).notNullable();  // Amount of the payment
        table.date('payment_date').notNullable();  // Date of the payment

        // Foreign key relationship to Contracts table
        table.foreign('contract_id').references('id').inTable('contracts').onDelete('CASCADE');

        table.timestamp('created_at').defaultTo(knex.fn.now());  // Timestamp when the payment was recorded
      });
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('payments');
};