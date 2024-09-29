
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


module.exports = {
  create,
  // ... Other CRUD operations...
}