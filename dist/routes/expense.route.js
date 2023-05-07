"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ExpenseRoute", {
    enumerable: true,
    get: ()=>ExpenseRoute
});
const _express = require("express");
const _authmiddleware = require("../middlewares/auth.middleware");
const _validationmiddleware = require("../middlewares/validation.middleware");
const _expensecontroller = require("../controllers/expense.controller");
const _expensedto = require("../dtos/expense.dto");
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
let ExpenseRoute = class ExpenseRoute {
    initRoutes() {
        this.router.post(`${this.path}`, _authmiddleware.AuthMiddleware, (0, _validationmiddleware.ValidationMiddleware)(_expensedto.ExpenseDTO), this.expense.createExpense);
        this.router.get(`${this.path}/:id(\\d+)`, _authmiddleware.AuthMiddleware, this.expense.findExpense);
        this.router.get(`${this.path}/group/:id(\\d+)`, _authmiddleware.AuthMiddleware, this.expense.getExpensesByGroup);
        this.router.put(`${this.path}/:id(\\d+)`, _authmiddleware.AuthMiddleware, (0, _validationmiddleware.ValidationMiddleware)(_expensedto.ExpenseDTO), this.expense.updateExpense);
    }
    constructor(){
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "path", "/expenses");
        _define_property(this, "expense", new _expensecontroller.ExpenseController());
        this.initRoutes();
    }
};

//# sourceMappingURL=expense.route.js.map