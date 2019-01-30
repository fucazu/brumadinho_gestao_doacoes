
exports.up = function(knex) {
  return knex.schema.hasTable('collection_point_stock').then(exists => {
    if (!exists) {
      return knex.schema.createTable('collection_point_stock', table => {
        table.increments('id').primary()
        table.integer('description_id').references('item_description.id')
        table.integer('coll_point_id').references('collection_point.id')
        table.integer('quantity')
        table.boolean('active').defaultTo(true)
        table.timestamps(true, true)
      })
    }
  })
};

exports.down = function(knex) { };
