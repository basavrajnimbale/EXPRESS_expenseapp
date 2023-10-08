const express = require('express');

const route = express.Router();

const controller = require('../controllers/addExpense');

route.post('/add-expense', controller.addExpense);

route.get('/all-expenses', controller.getExpenses);

route.get('/get-expense/:id', controller.getExpense);

route.put('/edit-expense/:id', controller.postEdit);

module.exports = route;







































