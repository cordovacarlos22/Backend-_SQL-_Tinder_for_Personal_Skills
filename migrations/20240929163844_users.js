/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('user_skills').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('user_skills', function (table) {
        table.increments('id').primary(); // Primary key
        table.integer('user_id').unsigned().notNullable(); // Foreign key to users table
        table.integer('skill_id').unsigned().notNullable(); // Foreign key to skills table

        // Foreign key relationships
        table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
        table.foreign('skill_id').references('id').inTable('skills').onDelete('CASCADE');

        table.timestamp('created_at').defaultTo(knex.fn.now()); // Timestamp for when the record was created
      });
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('user_skills');
};