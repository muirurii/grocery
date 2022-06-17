const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    details: {
        products: {
            type: Array,
            required: true
        },
        cost: {
            type: Number,
            required: true
        }
    }
}, {
    timestamps: true
});

const Transaction = mongoose.model('Transaction', TransactionSchema);
module.exports = Transaction;