const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    amount_each: String,
    category: String,
    img: String,
    price: Number,
    description: String,
    featured: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Product', ProductSchema);