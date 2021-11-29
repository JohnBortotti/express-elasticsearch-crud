const repository = require('../../repositories/posts/elasticSearch');

getPostById = (req, res) => {
  repository.getPostById(req.params.id)
    .then(response => {

      return res.status(200).json({
        response: response
      });
    })
    .catch(err => {
      return res.status(err.statusCode).json({
        response: err
      })
    })
}

module.exports = getPostById;