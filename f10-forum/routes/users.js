'use strict'
var express = require('express');
var router = express.Router();

//BASE URL: /users
router.post('/', (req, res, next) => {
	res.send('Creating new user');
});

router.get('/:id', (req, res, next) => {
	var userId = req.params.id;
	res.send('User profile for user ' + userId);
});

router.get('/:id/questions', (req, res, next) =>{
	var userId = req.params.id;
	res.send('User questions for user ' + userId);
});

router.get('/:id/answers', (req, res, next) =>{
	var userId = req.params.id;
	res.send('User answers for user ' + userId);
});

module.exports = router;