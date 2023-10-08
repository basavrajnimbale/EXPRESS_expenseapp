const Expense = require('../models/expense')

exports.addExpense = (req, res, next) => {
    console.log(req.body);
    const desc = req.body.desc;
    const amount = req.body.amount;
    const category = req.body.category;


    Expense.create({
        description: desc,
        amount: amount,
        category: category
    })
    .then((rep) => res.json(rep))
    .catch(err => res.status(500).json({ error: err }));
}

exports.getExpenses = async (req, res, next) => {
    try{
        result = await Expense.findAll();
        res.json(result);
    }
    catch(err){
        res.json({Error:err});
    }
};

exports.getExpense = async (req, res, next) => {
    try{
        const expenseId = req.params.id;
        let expense = await Expense.findOne({where: {id: expenseId}});
        res.json(expense);
    }
    catch(err){
        res.json({Error: err})
    }
}

exports.postEdit = async (req, res, next) => {
    try{
        console.log(req.body, 987);
        let expenseId = req.params.id;
        const updatedDesc = req.body.desc;
        const updatedAmount = req.body.amount;
        const updatedCategory = req.body.category;

        requiredExpense = await Expense.findOne({where: {id: expenseId}})
        const datavalues = {
            description: updatedDesc,
            amount : updatedAmount,
            category: updatedCategory
        };
        updatedExpense = await requiredExpense.update(datavalues);
        res.json(updatedExpense);
    }
    catch(err){
        console.log(err, 567);
        res.json({Error: err});
    }
}

