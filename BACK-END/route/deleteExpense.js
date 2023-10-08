const express = require('express');

const route = express.Router();

const controller = require('../controllers/deleteExpense');

route.get('/delete-expense/:id', controller);

module.exports = route;