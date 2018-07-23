'use strict'
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var User = require('../models/user');
var config = require('../config');

var users = require('./users');
var topics = require('./topics');

router.use('/users', users);
router.use('/topics', topics);

router.get('/', (req, res, next) => {
	res.send('Welcome to our forum!');
});

// check for token verification and how to retrieve token the best way
router.post('/auth', (req, res, next) => {
	User.findOne({email: req.body.email}, (err, user) => {
		if(err) return next(err);
		if(!user){
			res.json({success: false, message: "Authentication failed. User not found!"});
		}else if(user){
			if(user.password != req.body.password){
				res.json({success: false, message: "Authentication failed. Wrong username or password!"})
			}else{
				const payload = {
					email: user.email,
					user_id: user.id
				}
				var token = jwt.sign(payload, config.secret, {expiresIn: 60*60*60});
				res.json({
					success: true,
					// TODO display valid till date
					message: 'Token generated!',
					token: token
				})
			}
		}
	});
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