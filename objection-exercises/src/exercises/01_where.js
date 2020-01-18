const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users with a specific name (pick it from your database)
  // const nameMack = await User.query().where('firstName', 'Mack')
  // console.log(nameMack)

  // Do the same with object notation
  // const nameMack = await User.query().where({ firstName: 'Mack' })
  // console.log(nameMack)

  // Get all DOGS and BIRDS
  const dogsAndBirds = await Pet.query().whereIn('type', ['BIRD', 'DOG'])
  console.log(dogsAndBirds)
  // -----
  cleanup()
}

run()
