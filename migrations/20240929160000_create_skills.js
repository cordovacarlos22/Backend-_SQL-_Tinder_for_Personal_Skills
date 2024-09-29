/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('skills').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('skills', function (table) {
        table.increments('id').primary(); // Primary key
        table.string('name').notNullable(); // Skill name, required field

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
  return knex.schema.dropTableIfExists('skills');
};