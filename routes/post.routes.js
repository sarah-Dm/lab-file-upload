const express = require('express');
const { NotExtended } = require('http-errors');
const router = express.Router();
const Post = require('../models/Post.model');

router.get('/post-form', (req, res) => res.render('post-form', { title: 'App created with Ironhack generator 🚀' }));


router.post('/post-form', fileUploader.single('image'), (req,res) => {
  const {content, creatorId, picName } = req.body;

  Post.create({
    content,
    creatorId,
    picPath: req.file.path,
    picName
  }).then(() => {
    res.redirect('posts');
  })
    .catch(error => next(error));
})


module.exports = router;