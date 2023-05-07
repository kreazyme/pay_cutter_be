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
    CreateGroupDTO: ()=>CreateGroupDTO,
    ShareGroupDTO: ()=>ShareGroupDTO,
    JoinGroupDTO: ()=>JoinGroupDTO,
    LeaveGroupDTO: ()=>LeaveGroupDTO
});
const _classvalidator = require("class-validator");
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
let CreateGroupDTO = class CreateGroupDTO {
    constructor(){
        _define_property(this, "name", void 0);
        _define_property(this, "userID", void 0);
    }
};
__decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGroupDTO.prototype, "name", void 0);
__decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateGroupDTO.prototype, "userID", void 0);
let ShareGroupDTO = class ShareGroupDTO {
    constructor(){
        _define_property(this, "id", void 0);
    }
};
__decorate([
    (0, _classvalidator.IsNumber)(),
    (0, _classvalidator.IsNotEmpty)(),
    __metadata("design:type", Number)
], ShareGroupDTO.prototype, "id", void 0);
let JoinGroupDTO = class JoinGroupDTO {
    constructor(){
        _define_property(this, "joinCode", void 0);
    }
};
__decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.IsNotEmpty)(),
    __metadata("design:type", String)
], JoinGroupDTO.prototype, "joinCode", void 0);
let LeaveGroupDTO = class LeaveGroupDTO {
    constructor(){
        _define_property(this, "id", void 0);
    }
};
__decorate([
    (0, _classvalidator.IsNumber)(),
    (0, _classvalidator.IsNotEmpty)(),
    __metadata("design:type", Number)
], LeaveGroupDTO.prototype, "id", void 0);

//# sourceMappingURL=groups.dto.js.map