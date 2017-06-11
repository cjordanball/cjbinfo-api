const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.Promises = global.Promises;

// Define the user Schema
const UserSchema = new Schema(
	{
		username: {
			type: String,
			required: [true, 'Please enter a username.'],
			lowercase: true
		},
		password: {
			type: String,
			required: [true, 'Please enter a password.']
		}
	}
);


// create the model class
const UserClass = mongoose.model('user', UserSchema);

// export the model
module.exports = UserClass;
