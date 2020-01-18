// Write your relation model here!
const BaseModel = require('./BaseModel')

class Relation extends BaseModel {
  static get tableName() {
    return 'relations'
  }

  static get relationMappings() {
    const User = require('./User')

    return {
      parent: {
        relation: this.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'relations.parentId',
          to: 'user.id',
        },
      },
      child: {
        relation: this.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'relations.childId',
          to: 'users.id',
        },
      },
    }
  }
}

module.exports = Relation
