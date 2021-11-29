const repository = require('../../repositories/posts/elasticSearch');

getPosts = (req, res) => {
  let query = {
    index: 'posts'
  }

  if (req.query.search) { // if request has query param set elastic multi_match query
    query.body = {
      query: {
        multi_match: {
          query: req.query.search,
          fields: ["title", "description", "tags", "body"]
        }
      }
    }
  }

  repository.searchPosts(query)
    .then(response => {
      return res.status(200).json({
        posts: response.hits.hits
      });
    })
    .catch(err => {
      return res.status(err.statusCode).json({
        response: err
      })
    })
}

module.exports = getPosts;