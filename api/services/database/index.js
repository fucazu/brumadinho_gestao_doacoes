const knex = require('knex')(require('../../database/index'))

knex.migrate.latest()

exports.knex = knex