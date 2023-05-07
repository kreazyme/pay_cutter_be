"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ExpenseController", {
    enumerable: true,
    get: ()=>ExpenseController
});
const _typedi = require("typedi");
const _expenseservice = require("../services/expense.service");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
let ExpenseController = class ExpenseController {
    constructor(){
        _define_property(this, "expense", _typedi.Container.get(_expenseservice.ExpenseService));
        _define_property(this, "createExpense", async (req, res, next)=>{
            try {
                const userID = req.user.id;
                const findExpense = await this.expense.createExpense(req.body.name, req.body.description, req.body.amount, req.body.paidBy, req.body.groupId, req.body.participants, userID, req.body.imageURL);
                res.status(201).json({
                    data: findExpense,
                    message: "created"
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "findExpense", async (req, res, next)=>{
            try {
                const expenseID = Number(req.params.id);
                const findExpense = await this.expense.findExpense(expenseID);
                res.status(200).json({
                    data: findExpense,
                    message: "ok"
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "getExpensesByGroup", async (req, res, next)=>{
            try {
                const groupID = Number(req.params.id);
                const findExpenses = await this.expense.getExpensesByGroup(groupID);
                res.status(200).json({
                    data: findExpenses,
                    message: "ok"
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "updateExpense", async (req, res, next)=>{
            try {
                console.log('updateExpense');
                const expenseID = Number(req.params.id);
                const findExpense = await this.expense.updateExpense(expenseID, req.body.name, req.body.description, req.body.amount, req.body.paidBy, req.body.groupId, req.body.participants, req.body.createdBy, req.body.imageURL);
                res.status(200).json({
                    data: findExpense,
                    message: "updated"
                });
            } catch (error) {
                next(error);
            }
        });
    }
};

//# sourceMappingURL=expense.controller.js.map