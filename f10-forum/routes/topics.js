'use strict'

var express = require('express');
var router = express.Router();
var Topic = require('../models/topic');

router.param('tID', (req, res, next, id) => {
	Topic.findById(id, (err, topic) => {
		if(err) return next(err);
		if(!topic){
			const err = new Error('Not found');
			err.status = 404;
			return next(err);
		}
		req.topic = topic;
		return next();
	});
});

//BASE URL: topics/
router.get('/', (req, res, next) => {
	Topic.find({})
		.exec((err, questions) => {
			if(err) return next(err);
			res.json(questions);
		});
});

router.post('/', (req, res, next) => {
	if(req.body.title &&
		req.body.description){

		var TopicData = {
			title: req.body.title,
			description: req.body.description
		};

		Topic.create(TopicData, (err, topic) =>{
			if(err) return next(err);
			return res.json(topic);
		});

	}else{
		const err = new Error('All fields required to create new topic');
		err.status = 400;
		return next(err);
	}
});

router.get('/:tID', (req, res, next) => {
	//check if id is valid
	return res.json(req.topic);
});

router.get('/:tID/questions', (req, res, next) => {
	return res.json(req.topic.questions);
});

router.post('/:tID/questions', (req, res, next) => {
	req.topic.questions.push(req.body);
	req.topic.save((err, question) => {
		if(err) return next(err);
		res.status(201);
		return res.json(question);
	})
});

module.exports = router;