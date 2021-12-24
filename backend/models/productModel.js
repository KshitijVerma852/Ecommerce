const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Enter the name of the product.'],
		trim: true
	},
	description: {
		type: String,
		required: [true, 'Enter the description for the product.']
	},
	price: {
		type: Number,
		required: [true, 'Enter the price of the product.'],
		maxLength: [8, 'Price cannot exceed 8 digits.']
	},
	rating: {
		type: Number,
		default: 0
	},
	images: [
		{
			public_id: {
				type: String,
				required: true
			},
			url: {
				type: String,
				required: true
			}
		}
	],
	category: {
		type: String,
		required: [true, 'Enter the category for the product.']
	},
	Stock: {
		type: Number,
		required: [true, 'Enter the stock of the product.'],
		maxLength: [4, 'Stock cannot exceed 4 digits.'],
		default: 1
	},
	numOfReviews: {
		type: Number,
		default: 0
	},
	reviews: [
		{
			name: {
				type: String,
				required: true
			},
			rating: {
				type: Number,
				required: true
			},
			comment: {
				type: String,
				required: true
			}
		}
	],
	createdAt: {
		type: Date,
		default: Date.now()
	}
});

module.exports = mongoose.model('Product', productSchema);
