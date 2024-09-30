
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
    .select('*')  /// select all users 
    .from('users')  // from users table
    .where('id', user_id)  // where id is user_id
};




module.exports = {
  create,
  findAllUsers,
  findOneUser,
  
  // ... Other CRUD operations...
}