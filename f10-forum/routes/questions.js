'use strict'
var express = require('express');
var router = express.Router();
var Question = require('../models/question').Question;

router.param('qID', (req, res, next, id) => {
	Question.findById(id, (err, question) => {
		if(err) return next(err);
		if(!question){
			const err = new Error('Not found!');
			err.status = 404;
			return next(err);
		}
		req.question = question;
		return next();
	});
});

//BASE URL: /questions
router.get('/:qID/answers', (req, res, next) => {
	res.json(req.question.answers);
});

router.post('/:qID/answers', (req, res, next) => {
	req.question.answers.push(req.body);
	req.question.save((err, question) => {
		if(err) return next(err);
		res.status = 201;
		return res.json(question);
	});
});

module.exports = router;