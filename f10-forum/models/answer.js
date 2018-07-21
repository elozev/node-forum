'use strict'
var mongoose = require('mongoose');

var answerSchema = mongoose.Schema({
	text:{
		type: String,
		required: true
	},
	votes:{
		type: Number,
		default: 0
	}
});

var Answer = mongoose.model('Answer', answerSchema);
module.exports.Answer = Answer;
module.exports.AnswerSchema = answerSchema;