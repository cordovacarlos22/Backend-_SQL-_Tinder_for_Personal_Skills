
//  ! #1 IMPORT KNEX CONFIG FILE
const knex = require('../config')

// ?CRUD : // CRUD: Create, Read, Update, Delete

// * CREATE
const create = (body) => {
  return knex
    .insert(body) // ¿Que datos voy a insertar?
    .into('users') // ¿En qué tabla?
    .returning('*') // ¿Qué datos quiero que me regrese?
};


// * READ
const findAllUsers = () => {
  return knex('users')
    .select(
      'users.*',  // Select all fields from users
      knex.raw('COALESCE(json_agg(DISTINCT jsonb_build_object(\'id\', skills.id, \'name\', skills.name)) FILTER (WHERE skills.id IS NOT NULL), \'[]\') AS skills'),  // Aggregate skills into an array
      knex.raw('COALESCE(json_agg(DISTINCT jsonb_build_object(\'id\', contracts.id, \'company\', contracts.company, \'hours_contracted\', contracts.hours_contracted, \'status\', contracts.status)) FILTER (WHERE contracts.id IS NOT NULL), \'[]\') AS contracts'),  // Aggregate contracts into an array
      knex.raw('COALESCE(json_agg(DISTINCT jsonb_build_object(\'id\', payments.id, \'amount\', payments.amount, \'payment_date\', payments.payment_date)) FILTER (WHERE payments.id IS NOT NULL), \'[]\') AS payments')  // Aggregate payments into an array
    )
    .leftJoin('user_skills', 'users.id', 'user_skills.user_id')  // Join user_skills to link users with their skills
    .leftJoin('skills', 'user_skills.skill_id', 'skills.id')  // Join skills table
    .leftJoin('contracts', 'users.id', 'contracts.user_id')  // Join contracts to link users with contracts
    .leftJoin('payments', 'contracts.id', 'payments.contract_id')  // Join payments related to contracts
    .groupBy('users.id');  // Group by users to aggregate results
};
const findOneUser = (user_id) => {
  return knex('users')
    .select(
      'users.*',  // Select all fields from users
      knex.raw('COALESCE(json_agg(DISTINCT jsonb_build_object(\'id\', skills.id, \'name\', skills.name)) FILTER (WHERE skills.id IS NOT NULL), \'[]\') AS skills'),  // Aggregate skills into a JSON array
      knex.raw('COALESCE(json_agg(DISTINCT jsonb_build_object(\'id\', contracts.id, \'company\', contracts.company, \'hours_contracted\', contracts.hours_contracted, \'status\', contracts.status)) FILTER (WHERE contracts.id IS NOT NULL), \'[]\') AS contracts'),  // Aggregate contracts into a JSON array
      knex.raw('COALESCE(json_agg(DISTINCT jsonb_build_object(\'id\', payments.id, \'amount\', payments.amount, \'payment_date\', payments.payment_date)) FILTER (WHERE payments.id IS NOT NULL), \'[]\') AS payments')  // Aggregate payments into a JSON array
    )
    .leftJoin('user_skills', 'users.id', 'user_skills.user_id')  // Join user_skills to link users with their skills
    .leftJoin('skills', 'user_skills.skill_id', 'skills.id')  // Join skills table
    .leftJoin('contracts', 'users.id', 'contracts.user_id')  // Join contracts to link users with contracts
    .leftJoin('payments', 'contracts.id', 'payments.contract_id')  // Join payments related to contracts
    .where('users.id', user_id)  // Filter by user_id to get the specific user
    .groupBy('users.id');  // Group by the user to aggregate the skills, contracts, and payments
};

const findUsersBySkill = (skillName) => {
  return knex('users')
    .select(
      'users.*',  // Select all user fields
      knex.raw('COALESCE(json_agg(DISTINCT jsonb_build_object(\'id\', skills.id, \'name\', skills.name)) FILTER (WHERE skills.id IS NOT NULL), \'[]\') AS skills')  // Aggregate all the user's skills into an array
    )
    .leftJoin('user_skills', 'users.id', 'user_skills.user_id')  // Join user_skills to link users to their skills
    .leftJoin('skills', 'user_skills.skill_id', 'skills.id')  // Join skills to get skill details
    .where('skills.name', skillName)  // Filter by the skill name (e.g., 'JavaScript')
    .groupBy('users.id');  // Group by users to avoid duplicate rows
};

// const findAllUsers = () => {
//   return knex
//     .select('*') // select all users
//     .from('users') // from table all users
    
// };

// const findOneUser = (user_id) => {
//   return knex
//     .select('*')  /// select all users 
//     .from('users')  // from users table
//     .where('id', user_id)  // where id is user_id
//     .returning('*') // return
// };

// update  user 
const updateUser = (userId, body) => {
  return knex
    .update(body)
    .from('users')
    .where('id', userId)
    .returning('*')
};


// delete user
const deleteUser = (userId) => {
  return knex
    .delete()
    .from('users')
    .where('id', userId)
};



module.exports = {
  create,
  findAllUsers,
  findOneUser,
  updateUser,
  deleteUser,
  findUsersBySkill
  // ... Other CRUD operations...
}