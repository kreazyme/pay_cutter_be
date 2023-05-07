"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ExpenseEntity", {
    enumerable: true,
    get: ()=>ExpenseEntity
});
const _classvalidator = require("class-validator");
const _typeorm = require("typeorm");
const _usersentity = require("./users.entity");
const _groupentity = require("./group.entity");
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
var __decorate = (void 0) && (void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (void 0) && (void 0).__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let ExpenseEntity = class ExpenseEntity extends _typeorm.BaseEntity {
    constructor(...args){
        super(...args);
        _define_property(this, "id", void 0);
        _define_property(this, "name", void 0);
        _define_property(this, "description", void 0);
        _define_property(this, "amount", void 0);
        _define_property(this, "createdAt", void 0);
        _define_property(this, "updatedAt", void 0);
        _define_property(this, "createdBy", void 0);
        _define_property(this, "paidBy", void 0);
        _define_property(this, "toGroup", void 0);
        _define_property(this, "participants", void 0);
        _define_property(this, "imageURL", void 0);
    }
};
__decorate([
    (0, _typeorm.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ExpenseEntity.prototype, "id", void 0);
__decorate([
    (0, _typeorm.Column)(),
    (0, _classvalidator.IsNotEmpty)(),
    __metadata("design:type", String)
], ExpenseEntity.prototype, "name", void 0);
__decorate([
    (0, _typeorm.Column)({
        nullable: true
    }),
    __metadata("design:type", String)
], ExpenseEntity.prototype, "description", void 0);
__decorate([
    (0, _classvalidator.IsNumber)(),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _typeorm.Column)(),
    __metadata("design:type", Number)
], ExpenseEntity.prototype, "amount", void 0);
__decorate([
    (0, _typeorm.Column)(),
    (0, _typeorm.CreateDateColumn)(),
    __metadata("design:type", typeof Date === "undefined" ? Object : Date)
], ExpenseEntity.prototype, "createdAt", void 0);
__decorate([
    (0, _typeorm.Column)(),
    (0, _typeorm.UpdateDateColumn)(),
    __metadata("design:type", typeof Date === "undefined" ? Object : Date)
], ExpenseEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, _classvalidator.IsNotEmpty)(),
    (0, _typeorm.ManyToOne)(()=>_usersentity.UserEntity, (user)=>user.id),
    __metadata("design:type", typeof _usersentity.UserEntity === "undefined" ? Object : _usersentity.UserEntity)
], ExpenseEntity.prototype, "createdBy", void 0);
__decorate([
    (0, _classvalidator.IsNotEmpty)(),
    (0, _typeorm.ManyToOne)(()=>_usersentity.UserEntity, (user)=>user.id),
    (0, _typeorm.JoinColumn)({
        name: "paidBy",
        referencedColumnName: "id"
    }),
    __metadata("design:type", typeof _usersentity.UserEntity === "undefined" ? Object : _usersentity.UserEntity)
], ExpenseEntity.prototype, "paidBy", void 0);
__decorate([
    (0, _classvalidator.IsNotEmpty)(),
    (0, _typeorm.ManyToOne)(()=>_groupentity.GroupEntity, (group)=>group.id),
    (0, _typeorm.JoinColumn)({
        name: "toGroup",
        referencedColumnName: "id"
    }),
    __metadata("design:type", typeof _groupentity.GroupEntity === "undefined" ? Object : _groupentity.GroupEntity)
], ExpenseEntity.prototype, "toGroup", void 0);
__decorate([
    (0, _typeorm.ManyToMany)(()=>_usersentity.UserEntity, (user)=>user.id),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _typeorm.JoinTable)({
        name: "expense_participants",
        joinColumn: {
            name: "expense_id",
            referencedColumnName: "id"
        }
    }),
    __metadata("design:type", Array)
], ExpenseEntity.prototype, "participants", void 0);
__decorate([
    (0, _typeorm.Column)({
        nullable: true
    }),
    (0, _typeorm.Column)(),
    __metadata("design:type", String)
], ExpenseEntity.prototype, "imageURL", void 0);
ExpenseEntity = __decorate([
    (0, _typeorm.Entity)({
        name: "expense_entity"
    })
], ExpenseEntity);

//# sourceMappingURL=expense.entity.js.map