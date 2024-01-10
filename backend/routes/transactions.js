const router = require('express').Router();
const {addIncome, getAllIncomes, deleteIncome} = require('../controllers/income')
const {addExpense, getAllExpenses, deleteExpense} = require('../controllers/expense')



router.post('/add-income', addIncome).get('/get-incomes', getAllIncomes).delete('/delete-income/:id', deleteIncome)
    .post('/add-expense', addExpense).get('/get-expenses', getAllExpenses).delete('/delete-expense/:id', deleteExpense)


module.exports = router 