/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('contracts').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('contracts', function (table) {
        table.increments('id').primary();  // Auto-incrementing ID as the primary key
        table.integer('user_id').unsigned().notNullable();  // Foreign key to the Users table
        table.string('company').notNullable();  // The company associated with the contract
        table.integer('hours_contracted').unsigned().notNullable();  // Number of hours contracted
        table.string('status').notNullable().defaultTo('active');  // Status of the contract, default to 'active'
        table.date('start_date').notNullable();  // Contract start date
        table.date('end_date').nullable();  // Contract end date, can be NULL if ongoing

        // Foreign key relationship to Users table
        table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');

        table.timestamp('created_at').defaultTo(knex.fn.now());  // Timestamp when the record was created
      });
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('contracts');
};