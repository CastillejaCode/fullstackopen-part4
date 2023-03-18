const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		minLength: 3,
	},
	name: String,
	passwordHash: String,
	notes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

userSchema.plugin(uniqueValidator);

userSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject.__v;
		delete returnedObject._id;
		delete returnedObject.passwordHash;
	},
});

module.exports = mongoose.model('User', userSchema);
