const esClient = require('../../config/esClient');

searchPosts = query => {
  return esClient.search(query);
}

createPost = query => {
  return esClient.index(query);
}

deletePost = query => {
  return esClient.delete(query);
}

getPostById = id => {
  return esClient.get({
    index: 'posts',
    id: id
  })
}

updatePost = query => {
  return esClient.update(query);
}


module.exports = { searchPosts, createPost, deletePost, getPostById, updatePost }