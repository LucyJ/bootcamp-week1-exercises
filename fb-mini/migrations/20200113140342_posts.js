exports.up = async knex => knex.schema.createTable('posts', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))
  table
    .text('postText')
    .notNullable()

  table.date('posted').notNullable()

  table.integer('likes')

  table.uuid('poster').notNullable().references('users.id').onDelete('CASCADE')
    .onUpdate('CASCADE')

  table.timestamps(true)
})

exports.down = async knex => knex.schema.dropTableIfExists('posts')
