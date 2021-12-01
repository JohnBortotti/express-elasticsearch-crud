const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();

const getPosts = require('../../actions/posts/getPosts');
const getPostById = require('../../actions/posts/getPostById');
const createPost = require('../../actions/posts/createPost');
const updatePost = require('../../actions/posts/updatePost');
const deletePost = require('../../actions/posts/deletePost');
const sendReportToQueue = require('../../actions/posts/sendReportToQueue');

router.get('/posts', (req, res) => {
  getPosts(req, res);
})

router.get('/posts/:id', (req, res) => {
  getPostById(req, res);
})

router.post('/posts', bodyParser, (req, res) => {
  createPost(req, res);
})

router.put('/posts/:id', bodyParser, (req, res) => {
  updatePost(req, res);
})

router.delete('/posts/:id', bodyParser, (req, res) => {
  deletePost(req, res);
})

router.post('/posts/report', bodyParser, (req, res) => {
  sendReportToQueue(req, res);
})

module.exports = router;