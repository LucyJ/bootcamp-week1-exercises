const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number exceeds 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
   */

  const user = await User.transaction(async trx => {
    const u = await User.query(trx).insert({
      firstName: 'John',
      lastName: 'Appleseed',
      age: 40,
      email: 'johnapple@email.com',
    }).returning('*')
    console.log(u)

    const pet = await u.$relatedQuery('pets', trx).insert({
      name: "John's pet",
      type: 'DOG',
    })
    console.log(pet)

    const petNum = await Pet.query(trx).resultSize()
    console.log(petNum)

    if (petNum > 15) {
      const delBird = await Pet.query(trx).delete().where('type', 'BIRD')
      console.log(delBird)
    }

    throw new Error('Database interaction failed!')
  })
  console.log(user)

  // -----
  cleanup()
}

run()
