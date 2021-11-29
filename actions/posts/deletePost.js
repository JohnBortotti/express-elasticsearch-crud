const repository = require('../../repositories/posts/elasticSearch');

deletePost = (req, res) => {
  repository.deletePost({
    index: 'posts',
    id: req.params.id
  })
    .then(_ => {
      return res.status(200).json({
        response: 'post deleted'
      })
    })
    .catch(err => {
      return res.status(err.statusCode).json({
        response: err
      })
    })
}

module.exports = deletePost;