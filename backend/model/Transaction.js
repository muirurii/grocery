const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    delivered: {
        type: Boolean,
        default: false
    },
    paid: {
        type: Boolean,
        default: false
    },
    products: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true
    }
}, {
    timestamps: true
});

const Transaction = mongoose.model('Transaction', TransactionSchema);
module.exports = Transaction;