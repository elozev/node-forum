'use strict'
var mongoose = require('mongoose');
var ArticleSchema = require('./article').ArticleSchema;

var TopicSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true,
		unique: true
	},
	description: {
		type: String,
		required: false,
		trim: true
	},
	articles: [ArticleSchema]
});

var Topic = mongoose.model('Topic', TopicSchema);

module.exports = Topic;