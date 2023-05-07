"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ExpenseDTO: ()=>ExpenseDTO,
    FindExpenseDTO: ()=>FindExpenseDTO
});
const _classvalidator = require("class-validator");
const _typeorm = require("typeorm");
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
let ExpenseDTO = class ExpenseDTO {
    constructor(){
        _define_property(this, "name", void 0);
        _define_property(this, "description", void 0);
        _define_property(this, "amount", void 0);
        _define_property(this, "paidBy", void 0);
        _define_property(this, "groupId", void 0);
        _define_property(this, "participants", void 0);
        _define_property(this, "imageURL", void 0);
    }
};
__decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.IsNotEmpty)(),
    __metadata("design:type", String)
], ExpenseDTO.prototype, "name", void 0);
__decorate([
    (0, _classvalidator.IsString)(),
    __metadata("design:type", String)
], ExpenseDTO.prototype, "description", void 0);
__decorate([
    (0, _classvalidator.IsNumber)(),
    (0, _classvalidator.IsNotEmpty)(),
    __metadata("design:type", Number)
], ExpenseDTO.prototype, "amount", void 0);
__decorate([
    (0, _classvalidator.IsNumber)(),
    (0, _classvalidator.IsNotEmpty)(),
    __metadata("design:type", Number)
], ExpenseDTO.prototype, "paidBy", void 0);
__decorate([
    (0, _classvalidator.IsNumber)(),
    (0, _classvalidator.IsNotEmpty)(),
    __metadata("design:type", Number)
], ExpenseDTO.prototype, "groupId", void 0);
__decorate([
    (0, _classvalidator.IsArray)(),
    (0, _classvalidator.IsNotEmpty)(),
    __metadata("design:type", Array)
], ExpenseDTO.prototype, "participants", void 0);
__decorate([
    (0, _classvalidator.IsString)(),
    (0, _typeorm.Column)({
        nullable: true
    }),
    __metadata("design:type", String)
], ExpenseDTO.prototype, "imageURL", void 0);
let FindExpenseDTO = class FindExpenseDTO {
    constructor(){
        _define_property(this, "id", void 0);
    }
};
__decorate([
    (0, _classvalidator.IsNumber)(),
    (0, _classvalidator.IsNotEmpty)(),
    __metadata("design:type", Number)
], FindExpenseDTO.prototype, "id", void 0);

//# sourceMappingURL=expense.dto.js.map