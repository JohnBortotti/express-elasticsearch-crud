const express = require('express');
const router = express.Router();

const postsRoutes = require('./posts/routes');

router.use(postsRoutes);

module.exports = router;