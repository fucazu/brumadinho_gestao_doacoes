
exports.up = function(knex) {
  return knex.schema.hasTable('distribution_center_stock').then(exists => {
    if (!exists) {
      return knex.schema.createTable('distribution_center_stock', table => {
        table.increments('id').primary()
        table.integer('description_id').references('item_description.id')
        table.integer('dist_center_id').references('distribution_center.id')
        table.integer('quantity')
        table.boolean('active').defaultTo(true)
        table.timestamps(true, true)
      })
    }
  })
};

exports.down = function(knex) { };
