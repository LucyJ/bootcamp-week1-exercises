exports.up = async knex => knex.schema.createTable('users', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .string('email')
    .unique()
    .notNullable()

  table.string('firstName').notNullable()

  table.string('lastName').notNullable()

  table.date('dob')

  table.string('password').notNullable()

  table.text('bio')

  table.decimal('latitude')

  table.decimal('longitude')

  table.timestamps(true)
})

exports.down = async knex => knex.schema.dropTableIfExists('users')
