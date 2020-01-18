const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert yourself in the users table
  // const me = await User.query().insert({
  //   firstName: 'Lucy',
  //   lastName: 'Jiao',
  //   email: 'lucyjiao@college.harvard.edu',
  //   age: 19,
  // })
  // console.log(me)

  // Insert a pet belonging to you (get your ID from Postico or DBeaver)
  const myPet = await Pet.query().insert({
    ownerId: 'ae0a9bdc-c5d9-4258-b26a-26e807d7283c',
    type: 'CAT',
    name: 'MEwoowow',
  }).returning('*')
  console.log(myPet)

  // -----
  cleanup()
}

run()
