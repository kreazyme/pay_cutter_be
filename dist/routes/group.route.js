"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "GroupRoute", {
    enumerable: true,
    get: ()=>GroupRoute
});
const _groupcontroller = require("../controllers/group.controller");
const _express = require("express");
const _authmiddleware = require("../middlewares/auth.middleware");
const _validationmiddleware = require("../middlewares/validation.middleware");
const _groupsdto = require("../dtos/groups.dto");
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
let GroupRoute = class GroupRoute {
    initRoutes() {
        this.router.get(`${this.path}`, _authmiddleware.AuthMiddleware, this.group.getMyGroups);
        this.router.get(`${this.path}/:id(\\d+)`, _authmiddleware.AuthMiddleware, this.group.getGroupById);
        this.router.post(`${this.path}`, (0, _validationmiddleware.ValidationMiddleware)(_groupsdto.CreateGroupDTO), _authmiddleware.AuthMiddleware, this.group.createGroup);
        this.router.delete(`${this.path}/join`, (0, _validationmiddleware.ValidationMiddleware)(_groupsdto.LeaveGroupDTO), _authmiddleware.AuthMiddleware, this.group.leaveGroup);
        this.router.put(`${this.path}/join`, (0, _validationmiddleware.ValidationMiddleware)(_groupsdto.JoinGroupDTO), _authmiddleware.AuthMiddleware, this.group.joinGroup);
        this.router.post(`${this.path}/join`, (0, _validationmiddleware.ValidationMiddleware)(_groupsdto.ShareGroupDTO), _authmiddleware.AuthMiddleware, this.group.shareGroup);
    }
    constructor(){
        _define_property(this, "path", '/groups');
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "group", new _groupcontroller.GroupController());
        this.initRoutes();
    }
};

//# sourceMappingURL=group.route.js.map