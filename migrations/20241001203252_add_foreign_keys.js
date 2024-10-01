/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return Promise.all([
    // Drop existing foreign key constraint on user_id in user_skills table (if exists) and re-add it
    knex.schema.table('user_skills', function (table) {
      table.dropForeign('user_id');  // Drop foreign key if it exists
      table.dropForeign('skill_id'); // Drop foreign key if it exists
    }).then(() => {
      return knex.schema.table('user_skills', function (table) {
        table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
        table.foreign('skill_id').references('id').inTable('skills').onDelete('CASCADE');
      });
    }),

    // Drop and re-add foreign key constraint for contracts table
    knex.schema.table('contracts', function (table) {
      table.dropForeign('user_id');
    }).then(() => {
      return knex.schema.table('contracts', function (table) {
        table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
      });
    }),

    // Drop and re-add foreign key constraint for payments table
    knex.schema.table('payments', function (table) {
      table.dropForeign('contract_id');
    }).then(() => {
      return knex.schema.table('payments', function (table) {
        table.foreign('contract_id').references('id').inTable('contracts').onDelete('CASCADE');
      });
    })
  ]);
};

exports.down = function (knex) {
  return Promise.all([
    knex.schema.table('user_skills', function (table) {
      table.dropForeign('user_id');
      table.dropForeign('skill_id');
    }),
    knex.schema.table('contracts', function (table) {
      table.dropForeign('user_id');
    }),
    knex.schema.table('payments', function (table) {
      table.dropForeign('contract_id');
    })
  ]);
};
