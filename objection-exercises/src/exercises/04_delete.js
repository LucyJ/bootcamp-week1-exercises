const cleanup = require('../lib/cleanup')
// Import models
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Delete all CATS
  const deleteCats = await Pet.query().delete().whereIn('type', ['CAT']).returning('*')
  // const deleteCats = Pet.query().deleteById('fa0ae742-378c-438c-8851-8e8b93d676ce')
  console.log(deleteCats)

  // -----
  cleanup()
}

run()
