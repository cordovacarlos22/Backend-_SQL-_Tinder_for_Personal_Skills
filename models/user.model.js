
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
  return knex
    .select('*') // select all users
    .from('users') // from table all users

};

const findOneUser = (user_id) => {
  return knex
    .select(
      'users.*',  // Select all columns from the 'users' table
      knex.raw('json_agg(skills.*) AS skills')  // Aggregate the user's skills as a JSON array
    )
    .leftJoin('user_skills', 'users.id', 'user_skills.user_id')  // Join 'user_skills' on user_id
    .leftJoin('skills', 'user_skills.skill_id', 'skills.id')  // Join 'skills' on skill_id
    .where('users.id', user_id)  // Filter by user_id
    .groupBy('users.id');  // Group by the user to handle the aggregation
};




module.exports = {
  create,
  findAllUsers,
  findOneUser,

  // ... Other CRUD operations...
}