const casual = require('casual')
const usersData = require('./users')

casual.define('friend', (requesterId, requesteeId) => ({
  id: casual.uuid,
  requester: requesterId,
  requestee: requesteeId,
  status: casual.random_element(['ACCEPTED', 'REQUESTED', 'DENIED']),
  created_at: casual.moment,
  updated_at: casual.moment,
}))

const postData = []

for (let i = 0; i < 20; ++i) {
  const requesterId = casual.random_element(usersData).id
  let requesteeId = casual.random_element(usersData).id
  while (requesterId === requesteeId) {
    requesteeId = casual.random_element(usersData).id
  }
  postData.push(casual.friend(requesterId, requesteeId))
}

module.exports = postData
