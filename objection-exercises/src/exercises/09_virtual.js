const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Use basic queries to test any virtual attributes you wrote on your models
  const fullName = await User.query().first()
  console.log(fullName.fullName)

  const ownerName = await Pet.query().withGraphFetched('users').first()
  console.log(ownerName.ownerName)

  // -----
  cleanup()
}

run()
