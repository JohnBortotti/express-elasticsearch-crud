const repository = require('../../repositories/posts/elasticSearch');

createPost = (req, res) => {
  repository.createPost({
    index: 'posts',
    body: {
      title: req.body.title,
      description: req.body.description,
      tags: [req.body.tags],
      body: req.body.body
    }
  })
    .then(_ => {
      return res.status(201).json({
        response: 'post created'
      })
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({
        response: err
      })
    })
}

module.exports = createPost;