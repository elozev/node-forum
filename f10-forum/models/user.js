'use strict'
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

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

userSchema.statics.authenticate = function(email, password, callback){
	User.findOne({email: email})
				.exec((err, user) => {
					if(err) return err;
					else if (!user){
						var err = new Error('User not found!');
						err.status = 401;
						return callback(err);
					}
					bcrypt.compare(password, user.password, (err, res) => {
						if(res === true){
							return callback(null, user);
						}else{
							return callback();
						}
					});
				});
};

userSchema.pre('save', function(next) {
	var user = this;
	bcrypt.hash(this.password, 10, (err, hash) => {
		if (err) return next(err);
		user.password = hash;
		next();
	});
});

var User = mongoose.model('User', userSchema);

module.exports = User;
