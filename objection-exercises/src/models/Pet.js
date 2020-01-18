// Write your Pet model here!

// const { BelongsToOneRelation } = require('objection')
const BaseModel = require('./BaseModel')

class Pet extends BaseModel {
  static get tableName() {
    return 'pets'
  }

  static get relationMappings() {
    const User = require('./User')
    return {
      users: {
        relation: this.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'pets.ownerId',
          to: 'users.id',
        },
      },
    }
  }

  static get virtualAttributes() {
    return ['ownerName', 'isLanded']
  }

  get ownerName() {
    // const User = require('../models/User')
    const owner = this.users
    return owner.fullName
  }

  get isLanded() {
    return this.type !== 'ALLIGATOR' && this.type !== 'FISH'
  }
}

module.exports = Pet
