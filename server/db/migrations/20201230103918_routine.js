
exports.up = function(knex) {
  return knex.schema.createTable('routine', table => {
    table.increments('id')
    table.integer('time')
    table.string('task')
    table.string('importance')
    table.boolean('notification')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('routine')
};
