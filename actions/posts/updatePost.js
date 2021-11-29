const esClient = require('../../config/esClient');

updatePost = (req, res) => {
  esClient.update({
    index: 'posts',
    id: req.params.id,
    body: {
      doc: {
        title: req.body.title,
        description: req.body.description,
        tags: [req.body.tags],
        body: req.body.body
      }
    }
  })
    .then(_ => {
      return res.status(200).json({
        response: 'post updated'
      })
    })
    .catch(err => {
      return res.status(err.statusCode).json({
        response: err
      })
    })
}

module.exports = updatePost;