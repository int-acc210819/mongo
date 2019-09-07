const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
	'user-id': {
		type: String,
		trim: true,
	},
	'page-id': {
		type: String,
		trim: true,
	},
	ip: {
		type: String,
		trim: true,
	},
	country: {
		type: String,
		trim: true,
	},
	browser: {
		type: String,
		trim: true,
	},
	timestamp: Date,
});

module.exports = mongoose.model('event', EventSchema);