'use strict'
var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
	text:{
		type: String,
		required: true
	},
	votes:{
		type: Number,
		default: 0
	}
});

commentSchema.method('vote', function addVote(v, callback){
	if(v === 'up')
		this.votes += 1;
	else if(v === 'down')
		this.votes -= 1;
	this.parent().parent().save(callback);
});

var Comment = mongoose.model('Comment', commentSchema);
module.exports.Comment = Comment;
module.exports.CommentSchema = commentSchema;