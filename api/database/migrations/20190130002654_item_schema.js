
exports.up = function(knex) {
  return knex.schema.hasTable('item').then(exists => {
    if (!exists) {
      return knex.schema.createTable('item', table => {
        table.increments('id').primary()
        table.integer('description_id').references('item_description.id')
        table.string('quantity')
        table.string('unit')
        table.boolean('active').defaultTo(true)
        table.timestamps(true, true)
      })
    }
  })
};

exports.down = function(knex) { };
