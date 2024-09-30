
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

// update  user 
const updateUser = (userId, body) => {
  return knex
    .update(body)
    .from('homes')
    .where('house_id', userId)
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
  deleteUser

  
  // ... Other CRUD operations...
}