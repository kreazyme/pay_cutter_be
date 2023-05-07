"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ExpenseService", {
    enumerable: true,
    get: ()=>ExpenseService
});
const _expenseentity = require("../entities/expense.entity");
const _groupentity = require("../entities/group.entity");
const _usersentity = require("../entities/users.entity");
const _HttpException = require("../exceptions/HttpException");
const _typedi = require("typedi");
const _typeorm = require("typeorm");
var __decorate = (void 0) && (void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ExpenseService = class ExpenseService extends _typeorm.Repository {
    async findExpense(id) {
        const findExpense = await _expenseentity.ExpenseEntity.getRepository().createQueryBuilder("expense_entity").leftJoinAndSelect("expense_entity.toGroup", "toGroup").leftJoinAndSelect("expense_entity.paidBy", "paidBy").leftJoinAndSelect("expense_entity.participants", "participants").leftJoinAndSelect("expense_entity.createdBy", "createdBy").where("expense_entity.id = :id", {
            id: id
        }).getOne();
        return findExpense;
    }
    async createExpense(name, description, amount, paidBy, groupId, participants, createBy, imageURL) {
        const findGroup = await _groupentity.GroupEntity.findOne(groupId);
        if (!findGroup) throw new _HttpException.HttpException(404, "Group not found");
        let newParticipants = [];
        console.log(participants.length);
        participants.forEach(async (participant)=>{
            const findParticipant = await _usersentity.UserEntity.findOne(participant);
            if (!findParticipant) throw new _HttpException.HttpException(404, "Participant number" + participant + " not found");
            newParticipants.push(findParticipant);
        });
        const findPaidBy = await _usersentity.UserEntity.findOne(paidBy);
        if (!findPaidBy) throw new _HttpException.HttpException(404, "PaidBy not found");
        const findCreateBy = await _usersentity.UserEntity.findOne(createBy);
        if (!findCreateBy) throw new _HttpException.HttpException(404, "CreateBy not found");
        const newExpense = new _expenseentity.ExpenseEntity();
        newExpense.name = name;
        newExpense.description = description;
        newExpense.amount = amount;
        newExpense.paidBy = findPaidBy;
        newExpense.toGroup = findGroup;
        newExpense.participants = newParticipants;
        newExpense.imageURL = imageURL;
        newExpense.createdBy = findCreateBy;
        await newExpense.save();
        return newExpense;
    }
    async getExpensesByGroup(groupId) {
        const findExpenses = await _expenseentity.ExpenseEntity.getRepository().createQueryBuilder("expense_entity").leftJoinAndSelect("expense_entity.paidBy", "paidBy").leftJoinAndSelect("expense_entity.participants", "participants").leftJoinAndSelect("expense_entity.createdBy", "createdBy").where("expense_entity.toGroup = :id", {
            id: 11
        }).getMany();
        return findExpenses;
    }
    async updateExpense(id, name, description, amount, paidBy, groupId, participants, createBy, imageURL) {
        const findExpense = await _expenseentity.ExpenseEntity.findOne(id);
        if (!findExpense) throw new _HttpException.HttpException(404, "Expense not found");
        findExpense.name = name;
        findExpense.description = description;
        findExpense.amount = amount;
        findExpense.paidBy = await _usersentity.UserEntity.findOne(paidBy);
        findExpense.toGroup = await _groupentity.GroupEntity.findOne(groupId);
        findExpense.participants = await _usersentity.UserEntity.findByIds(participants);
        findExpense.createdBy = await _usersentity.UserEntity.findOne(createBy);
        findExpense.imageURL = imageURL;
        await findExpense.save();
        return findExpense;
    }
};
ExpenseService = __decorate([
    (0, _typedi.Service)(),
    (0, _typeorm.EntityRepository)()
], ExpenseService);

//# sourceMappingURL=expense.service.js.map