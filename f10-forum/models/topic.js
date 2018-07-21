'use strict'
var mongoose = require('mongoose');
var QuestionSchema = require('./question').QuestionSchema;

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
	questions: [QuestionSchema]
});

var Topic = mongoose.model('Topic', TopicSchema);

module.exports = Topic;