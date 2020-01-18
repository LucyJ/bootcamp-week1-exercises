const casual = require('casual')
const usersData = require('./users')

casual.define('post', posterId => ({
  id: casual.uuid,
  postText: casual.sentences(),
  posted: casual.moment,
  likes: casual.integer(0, 20),
  poster: posterId,
  created_at: casual.moment,
  updated_at: casual.moment,
}))

const postData = []

for (let i = 0; i < 20; ++i) {
  const posterId = casual.random_element(usersData).id
  postData.push(casual.post(posterId))
}

module.exports = postData
