
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

const findAllUsers = () => {
  return knex
    .select('*') // ¿Qué datos quiero que me regrese?
    .from('users') // ¿De qué tabla quiero obtener los datos?
  
};


module.exports = {
  create,
  findAllUsers
  // ... Other CRUD operations...
}