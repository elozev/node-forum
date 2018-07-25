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

function resourceForbidden(next){
	const err = new Error('You don\'t have the right permissions to perform this action!');
	err.status = 403;
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

router.get('/:tID', (req, res, next) => {
	return res.json(req.topic);
});

router.get('/:tID/articles', (req, res, next) => { return res.json(req.topic.articles); });

// end points for articles
router.get('/:tID/articles/:aID', (req, res, next) => {
	return res.json(req.article);
});

router.get('/:tID/articles/:aID/comments', (req, res, next) => {
	return res.json(req.article.comments);
});

// FOR TESTING PURPOSES
router.get('/:tID/articles/:aID/comments/:cID/', (req, res, next) => {
	return res.json(req.comment);
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
			description: req.body.description,
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

router.post('/:tID/articles', (req, res, next) => {

	console.log(typeof req.decoded.user_id);
	var ArticleData = {
		title: req.body.title,
		text: req.body.text,
		user_id: req.decoded.user_id
	}

	req.topic.articles.push(ArticleData);
	req.topic.save((err, article) => {
		if(err) return next(err);
		res.status(201);
		return res.json(article);
	})
});

router.put('/:tID/articles/:aID', (req, res, next) => {
	if(req.article.user_id === req.decoded.user_id){
		req.article.title = req.body.title;
		req.article.text = req.body.text;

		req.topic.save((err) => {
			if(err) return next(err);
			return res.json(req.article);
		});
	}else{
		return resourceForbidden(next);
	}
});

router.delete('/:tID/articles/:aID', (req, res, next) => {
	if(req.article.user_id === req.decoded.user_id){
		req.article.remove((err) => {
			req.topic.save((err, topic) => {
				if(err) return next(err);
				return res.json(topic);
			});
		});
	}else {
		return resourceForbidden(next);
	}
});

router.post('/:tID/articles/:aID/comments', (req, res, next) => {
	var commentData = {
		text: req.body.text,
		user_id: req.decoded.user_id
	}

	req.article.comments.push(commentData);
	req.topic.save((err, topic) => {
		if(err) return next(err);
		res.status = 201;
		return res.json(req.article);
	});
});

router.put('/:tID/articles/:aID/comments/:cID', (req, res, next) => {
	if(req.comment.user_id === req.decoded.user_id){
		req.comment.text = req.body.text;
		req.topic.save((err, topic) => {
			if(err) return next(err);
			res.status = 200;
			return res.json(req.article);
		});
	} else {
		return resourceForbidden(next);
	}
});

router.delete('/:tID/articles/:aID/comments/:cID', (req, res, next) => {
	if(req.comment.user_id === req.decoded.user_id){
		req.comment.remove((err) => {
			if(err) return next(err);
			req.topic.save((err, topic) => {
				if(err) return next(err);
				return res.json(req.article);
			});
		});
	} else {
		return resourceForbidden(next);
	}
});

router.post('/:tID/articles/:aID/comments/:cID/vote-:dir', (req, res, next) => {
	if(req.comment.user_id !== req.decoded.user_id){
		if(req.params.dir.search(/^(up|down)$/) === -1) return notFoundError(next);
		else {
			var v = req.params.dir;
			req.comment.vote(v, (err, comment) => {
				if(err) return next(err);
				return res.json(req.comment);
			});
		}
	} else {
		var err = new Error('You cannot vote for your own comments!');
		err.status = 403;
		return next(err);
	}
});

module.exports = router;