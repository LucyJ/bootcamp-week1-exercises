const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert a new person name Peter Bynum with two pet DOGs named Rocco & Rosey
  const peter = await User.query().insertGraph({
    firstName: 'Peter',
    lastName: 'Bynum',
    email: 'peterbynum@college.harvard.edu',
    age: 20,
    pets: [
      {
        name: 'Rocco',
        type: 'DOG',
      },
      {
        name: 'Rosey',
        type: 'DOG',
      },
    ],
  })

  console.log(peter)
  // -----
  cleanup()
}

run()
