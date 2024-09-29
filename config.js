const ENV = process.env.NODE_ENV || 'production'

const knex = require('knex')
const knexfile = require('./knexfile')

// Mando a llamar a Knex, con la configuración de entorno adecuada
module.exports = knex(knexfile[ENV])