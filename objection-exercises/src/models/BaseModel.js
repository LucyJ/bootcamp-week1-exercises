const { Model } = require('objection')
const knex = require('../lib/index')

Model.knex(knex)

class BaseModel extends Model {
  // static get columnNameMappers() {
  // return snakeCaseMappers()
  // }
  async $beforeUpdate(opt, queryContext) {
    await super.$beforeUpdate(opt, queryContext)
    this.updated_at = new Date()
  }
}

module.exports = BaseModel
