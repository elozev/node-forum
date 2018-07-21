'use strict'
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	email: {
		type: String,
		unique: true,
		required: true,
		trim: true
	},
	password: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true,
		trim: true
	}

});

var User = mongoose.model('User', userSchema);

module.exports = User;
