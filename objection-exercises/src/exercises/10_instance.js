const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get an instance of a user using findById(<YOUR_ID>)
  const me = await User.query().findById('ae0a9bdc-c5d9-4258-b26a-26e807d7283c')
  console.log(me)

  // Use that instance to create a new pet related that user
  const petCreation = await me.$relatedQuery('pets').insert({
    name: 'mewmew',
    type: 'CAT',
  }).returning('*')
  console.log(petCreation)

  // Use that instance to get all of the user's pets and children
  // Hint -- use $fetchGraph
  // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph

  const myStuff = await me.$fetchGraph('[pets, children]')
  console.log(myStuff)

  // -----
  cleanup()
}

run()
