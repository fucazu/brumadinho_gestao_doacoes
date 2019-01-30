
exports.up = function(knex) {
  return knex.schema.hasTable('item_description').then(exists => {
    if (!exists) {
      return knex.schema.createTable('item_description', table => {
        table.increments('id').primary()
        table.integer('description')
        table.boolean('active').defaultTo(true)
        table.timestamps(true, true)
      })
    }
  })
};

exports.down = function(knex) { };
