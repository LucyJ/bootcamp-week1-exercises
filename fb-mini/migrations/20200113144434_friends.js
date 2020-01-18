
exports.up = async knex => knex.schema.createTable('friends', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table.uuid('requester').notNullable().references('users.id').onDelete('CASCADE')
    .onUpdate('CASCADE')

  table.uuid('requestee').notNullable().references('users.id').onDelete('CASCADE')
    .onUpdate('CASCADE')


  table.enu('status', ['ACCEPTED', 'REQUESTED', 'DENIED'])

  table.timestamps(true)
})

exports.down = async knex => knex.schema.dropTableIfExists('friends')
