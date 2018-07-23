'use strict'

var express = require('express');
var router = express.Router();
var Topic = require('../models/topic');
var Article = require('../models/article').Article;
var config = require('../config');
var jwt = require('jsonwebtoken');
/*
 * TODO check for correct status codes on each function
 */
function notFoundError(next){
	const err = new Error('Not found!');
	err.status = 404;
	return next(err);
}

router.param('tID', (req, res, next, id) => {
	Topic.findById(id, (err, topic) => {
		if(err) return next(err);
		if(!topic)
			return notFoundError(next);
		req.topic = topic;
		return next();
	});
});

router.param('aID', (req, res, next, id) => {
	if(req.topic){
		req.article = req.topic.articles.id(id);
		if(req.article) return next();
	}
	return notFoundError(next);
});

router.param('cID', (req, res, next, id) => {
	if(req.article){
		req.comment = req.article.comments.id(id);
		if(req.comment) return next();
	}
	return notFoundError(next);
});

router.get('/', (req, res, next) => {
	Topic.find({})
		.exec((err, questions) => {
			if(err) return next(err);
			res.json(questions);
		});
});

router.use((req, res, next) => {
	var token = req.headers['x-access-token'] || req.query.token;
	if(token){
		jwt.verify(token, config.secret, (err, decoded) => {
			if(err) return res.json({success: false, message: 'Failure to authenticate token!'});
			else {
				req.decoded = decoded;
				next();
			}
		});
	}else{
		return res.json({
			success: false,
			message: 'No token provided'
		});
	}
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
	return res.json(req.topic);
});

router.get('/:tID/articles', (req, res, next) => { return res.json(req.topic.articles); });

router.post('/:tID/articles', (req, res, next) => {
	req.topic.articles.push(req.body);
	req.topic.save((err, article) => {
		if(err) return next(err);
		res.status(201);
		return res.json(article);
	})
});

// end points for articles
router.get('/:tID/articles/:aID', (req, res, next) => {
	return res.json(req.article);
});

router.put('/:tID/articles/:aID', (req, res, next) => {
	req.article.title = req.body.title;
	req.article.text = req.body.text;

	req.topic.save((err) => {
		if(err) return next(err);
		return res.json(req.article);
	});
});

router.delete('/:tID/articles/:aID', (req, res, next) => {
	req.article.remove((err) => {
		req.topic.save((err, topic) => {
			if(err) return next(err);
			return res.json(topic);
		});
	});
});

// end points for commentsCast to ObjectId failed for value

router.get('/:tID/articles/:aID/comments', (req, res, next) => {
	return res.json(req.article.comments);
});

router.post('/:tID/articles/:aID/comments', (req, res, next) => {
	req.article.comments.push(req.body);
	req.topic.save((err, topic) => {
		if(err) return next(err);
		res.status = 201;
		return res.json(req.article);
	});
});

router.put('/:tID/articles/:aID/comments/:cID', (req, res, next) => {
	req.comment.text = req.body.text;
	req.topic.save((err, topic) => {
		if(err) return next(err);
		res.status = 200;
		return res.json(req.article);
	});
});

router.delete('/:tID/articles/:aID/comments/:cID', (req, res, next) => {
	req.comment.remove((err) => {
		if(err) return next(err);
		req.topic.save((err, topic) => {
			if(err) return next(err);
			return res.json(req.article);
		});
	})
});

router.post('/:tID/articles/:aID/comments/:cID/vote-:dir', (req, res, next) => {
	if(req.params.dir.search(/^(up|down)$/) === -1) return notFoundError(next);
	else {
		var v = req.params.dir;
		req.comment.vote(v, (err, comment) => {
			if(err) return next(err);
			return res.json(comment);
		});
	}
});
// FOR TESTING PURPOSES
router.get('/:tID/articles/:aID/comments/:cID/', (req, res, next) => {
	return res.json(req.comment);
});

module.exports = router;