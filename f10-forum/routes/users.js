'use strict'
var express = require('express');
var router = express.Router();
var User = require('../models/user');

//BASE URL: /users
router.get('/', (req, res, next) => {
	User.find((err, users) => {
		if(err) return next(err);
		return res.json(users);
	});
});
router.get('/:id', (req, res, next) => {
	var userId = req.params.id;
	res.send('User profile for user ' + userId);
});

router.get('/:id/articles', (req, res, next) =>{
	var userId = req.params.id;
	res.send('User questions for user ' + userId);
});

router.get('/:id/comments', (req, res, next) =>{
	var userId = req.params.id;
	res.send('User answers for user ' + userId);
});

module.exports = router;