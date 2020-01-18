const casual = require('casual')
const usersData = require('./users')
const postData = require('./posts')

casual.define('like', (likerId, postId) => ({
  id: casual.uuid,
  liker: likerId,
  post: postId,
  created_at: casual.moment,
  updated_at: casual.moment,
}))

const likeData = []

for (let i = 0; i < 20; ++i) {
  const likerId = casual.random_element(usersData).id
  const postId = casual.random_element(postData).id
  likeData.push(casual.like(likerId, postId))
}

module.exports = likeData
