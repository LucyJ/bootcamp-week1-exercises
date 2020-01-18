const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  // const userAndPets = await User.query().join('pets', 'users.id', 'pets.ownerId')
  // .select('pets.name', 'users.firstName')
  // const userAndPets = await User.query().withGraphFetched('pets')
  // console.log(userAndPets)

  // Get all users, their pets, AND their children
  // const userPetsAndChildren = await User.query().withGraphFetched('[pets, children]')
  // console.log(userPetsAndChildren)

  // Get all users, their parents, and their grandparents
  // const userParentsAndGrandparents = await User.query().withGraphFetched('parents.parents')
  // console.log(userParentsAndGrandparents[0].parents[0])

  // Get all users, their pets, their chilren, and their childrens' pets
  const usersPetsChildrenAndChildrenPets = await User.query().withGraphFetched('[pets, children.pets]')
  console.log(usersPetsChildrenAndChildrenPets[0].children[1])
  // -----
  cleanup()
}

run()
