'use strict'
var mongoose = require('mongoose');
var CommentSchema = require('./comment').CommentSchema;

var ArticleSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	text: {
		type: String,
		required: true
	},
	user_id: {
		type: String,
		required: true
	},
	comments: [CommentSchema]
});

var Article = mongoose.model('Article', ArticleSchema);
module.exports.ArticleSchema = ArticleSchema;
module.exports.Article = Article;