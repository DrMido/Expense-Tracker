const mongoose= require('mongoose')


const expenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    amount: {
        type: Number,
        required: true,
        maxlength: 20,
        trim: true
    },
    type:{
        type: String,
        required: true,
        default:"expense"
    },
    date: {
        type: Date,
        default: Date.now,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 20
    }
}, {timestamps: true})

module.exports = mongoose.model('Expense', expenseSchema)