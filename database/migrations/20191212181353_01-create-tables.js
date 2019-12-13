
exports.up = function(knex) {
  return knex.schema 
  .createTable('users', tbl => {
      tbl.increments()
      tbl.string('username', 255)
  })
  .createTable('hackathons', tbl => {
      tbl.increments()
      tbl.string('hackathon_name', 128)
      tbl.string('hackathon_desc', 255)
  })
  .createTable('user_hackathons', tbl => {
      tbl.increments()
      tbl.integer('hackathon_id')
      .references('id')
      .inTable('hackathons')
      tbl.integer('user_id')
      .references('id')
      .inTable('users')
      tbl.string('user_role')
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('user_hackathons')
  .dropTableIfExists('hackathons')
  .dropTableIfExists('users')
};
