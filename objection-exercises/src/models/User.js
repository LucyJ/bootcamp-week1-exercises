const { HasManyRelation } = require('objection')
const BaseModel = require('./BaseModel')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    const Pet = require('./Pet')

    return {
      pets: {
        relation: HasManyRelation,
        modelClass: Pet,
        join: {
          from: 'users.id',
          to: 'pets.ownerId',
        },
      },
      children: {
        relation: this.ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          through: {
            from: 'relations.parentId',
            to: 'relations.childId',
          },
          to: 'users.id',
        },
      },
      parents: {
        relation: this.ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          through: {
            from: 'relations.childId',
            to: 'relations.parentId',
          },
          to: 'users.id',
        },
      },
    }
  }

  static get virtualAttributes() {
    return ['fullName', 'isAdult']
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  get isAdult() {
    return this.Age >= 18
  }
}

module.exports = User
