"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "GroupEntity", {
    enumerable: true,
    get: ()=>GroupEntity
});
const _classvalidator = require("class-validator");
const _typeorm = require("typeorm");
const _usersentity = require("./users.entity");
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
let GroupEntity = class GroupEntity extends _typeorm.BaseEntity {
    constructor(...args){
        super(...args);
        _define_property(this, "id", void 0);
        _define_property(this, "name", void 0);
        _define_property(this, "description", void 0);
        _define_property(this, "joinCode", void 0);
        _define_property(this, "joinCodeExpires", void 0);
        _define_property(this, "createdAt", void 0);
        _define_property(this, "updatedAt", void 0);
        _define_property(this, "participants", void 0);
    }
};
__decorate([
    (0, _typeorm.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], GroupEntity.prototype, "id", void 0);
__decorate([
    (0, _typeorm.Column)(),
    (0, _classvalidator.IsNotEmpty)(),
    __metadata("design:type", String)
], GroupEntity.prototype, "name", void 0);
__decorate([
    (0, _typeorm.Column)({
        nullable: true
    }),
    __metadata("design:type", String)
], GroupEntity.prototype, "description", void 0);
__decorate([
    (0, _typeorm.Column)({
        nullable: true
    }),
    __metadata("design:type", String)
], GroupEntity.prototype, "joinCode", void 0);
__decorate([
    (0, _typeorm.Column)({
        nullable: true
    }),
    __metadata("design:type", typeof Date === "undefined" ? Object : Date)
], GroupEntity.prototype, "joinCodeExpires", void 0);
__decorate([
    (0, _typeorm.Column)(),
    (0, _typeorm.CreateDateColumn)(),
    __metadata("design:type", typeof Date === "undefined" ? Object : Date)
], GroupEntity.prototype, "createdAt", void 0);
__decorate([
    (0, _typeorm.Column)(),
    (0, _typeorm.UpdateDateColumn)(),
    __metadata("design:type", typeof Date === "undefined" ? Object : Date)
], GroupEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, _typeorm.ManyToMany)(()=>_usersentity.UserEntity),
    (0, _typeorm.JoinTable)(),
    __metadata("design:type", Array)
], GroupEntity.prototype, "participants", void 0);
GroupEntity = __decorate([
    (0, _typeorm.Entity)({
        name: "group_entity"
    })
], GroupEntity);

//# sourceMappingURL=group.entity.js.map