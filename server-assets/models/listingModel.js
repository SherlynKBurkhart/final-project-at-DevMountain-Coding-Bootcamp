var mongoose = require('mongoose');

var Listing = new mongoose.Schema({
	address: {
		street: { type: String, required: true },
		city: { type: String, required: true },
		state: { type: String, required: true, maxlength: 2 },
		zip: { type: String, required: true, maxlength: 10 }
	},
	// geo: {
	// 	lon: { type: String, default: '0' },
	// 	lat: { type: String, default: '0' }
	// },
	loc: {type: [Number], index: '2d'},
	startDate: { type: Date, required: true },
	endDate: { type: Date, required: true },
	picture: { type: String, default: "http://www.clker.com/cliparts/l/a/V/x/F/r/house-icon-dark-green-md.png"},
	description: { type: String, required: true, default: "Come on down!" },
	user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
})

module.exports = mongoose.model('Listing', Listing);
