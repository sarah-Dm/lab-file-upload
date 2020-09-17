const express = require('express');
const router = express.Router();


router.get('/post-form', (req, res) => res.render('post-form', { title: 'App created with Ironhack generator 🚀' }));



module.exports = router;