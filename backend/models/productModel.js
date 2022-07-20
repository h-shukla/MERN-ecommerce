const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter product  name"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please enter proper description"]
    },
    price: {
        type: Number,
        required: [true, "Please enter proper description"],
        maxLength: [8, "Price can't exceed 8 figures"]
    },
    ratings: {
        type: Number,
        default: 0,
    },
    images: [{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }],
    category: {
        type: String,
        required: [true, "Please enter product category"],
    },
    stock: {
        type: Number,
        default: 1,
        required: [true, "Please enter product stock"],
        maxLength: [4, "Stock can't exceed 4 characters"]
    },
    numberOfReviews: {
        type: Number,
        default: 0,
    },
    reviews: [{
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
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Product', productSchema);
