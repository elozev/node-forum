'use strict'
var express = require('express');
var router = express.Router();
var User = require('../models/user');

//deeper routes
var questions = require('./questions');
var users = require('./users');
var topics = require('./topics');

router.use('/questions', questions);
router.use('/users', users);
router.use('/topics', topics);

router.get('/', (req, res, next) => {
	res.send('Welcome to our forum!');
});

// check for token verification and how to retrieve token the best way
router.post('/login', (req, res, next) => {
	res.send('Please log in');
});

router.post('/register', (req, res, next) => {
	if(req.body.email &&
		req.body.password &&
		req.body.confirmPassword &&
		req.body.name){

		if(req.body.password !== req.body.confirmPassword){
			const err = new Error('Passwords do not match!');
			err.status = 400;
			return next(err);
		}

		var userData = {
			email: req.body.email,
			password: req.body.password,
			name: req.body.name
		};

		User.create(userData, (err, user) =>{
			if(err)
				return next(err);
			else
				return res.json(user);
		});

	} else {
		//return Error here
		const err = new Error('All fields required');
		err.status = 400;
		return next(err);
	}
});

// Implement router for showing all available routes
// router.get('/info', (req,res,next) => {
// 	res.send(router.stack);
// });


module.exports = router;