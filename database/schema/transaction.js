const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        required: true
    },
    receiver: {
        type: Schema.Types.ObjectId,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: ['saving', 'expense'],
        required: true
    },
    status: {
        type: String,
        enum: ['success', 'failure', 'pending']
    }
}, {
    collection: 'Transactions'
});

module.exports = TransactionSchema;