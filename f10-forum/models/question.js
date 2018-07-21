'use strict'
var mongoose = require('mongoose');
var AnswerSchema = require('./answer').AnswerSchema;

var QuestionSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	text: {
		type: String,
		required: true
	},
	answers: [AnswerSchema]
});

var Question = mongoose.model('Question', QuestionSchema);
module.exports.QuestionSchema = QuestionSchema;
module.exports.Question = Question;