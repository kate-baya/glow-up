
exports.up = function(knex) {
  return knex.schema.createTable('monday_routine', table => {
    table.increments('id')
    table.string('day')
    table.string('date')
    table.string('time')
    table.string('task')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('monday_routine')
};
