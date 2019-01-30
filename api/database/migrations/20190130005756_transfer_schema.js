
exports.up = function(knex) {
  return knex.schema.hasTable('transfer').then(exists => {
    if (!exists) {
      return knex.schema.createTable('transfer', table => {
        table.increments('id').primary()
        table.integer('description_id').references('item_description.id')
        table.integer('quantity').notNull()
        table.integer('sender').notNull()
        table.integer('receiver').notNull()
        table.datetime('sent_at').notNull()
        table.datetime('received_at')
        table.boolean('active').defaultTo(true)
        table.timestamps(true, true)
      })
    }
  })
};

exports.down = function(knex) { };
