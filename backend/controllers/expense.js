const Expense = require('../models/expenseModel')


const addExpense = async (req, res) => {
    const {title, amount, type, date, category, description} = req.body
    const expense = await Expense.create({title, amount, type, date, category, description})
    try {
        if(amount < 0 || !amount === "number"){
            throw new Object(Error("All fields are required"), {statuscode: 400})
        }
        if(!title || !amount || !type || !date || !category){
            throw new Object(Error("All fields are required"), {statuscode: 400})
        }
        await expense.save()
        res.status(200).json({msg: "Expense added"})
    } catch (error) {
        throw new Error(error)
    }
}

const getAllExpenses = async (req, res) => {
    const expenses = await Expense.find({}).sort({CreatedAt: -1})
    try {
        res.status(200).json(expenses)
    } catch (error) {
        throw new Error(error)
    }
}

const deleteExpense = async (req, res) => {
    const {id} = req.params
    Expense.findByIdAndDelete(id)
    .then(() => {
        res.status(200).json({msg: "Expense deleted"})
    }).catch((err) => {
        throw new Error(err)
    })
}

module.exports = {addExpense, getAllExpenses, deleteExpense}