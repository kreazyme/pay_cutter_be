"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "GroupController", {
    enumerable: true,
    get: ()=>GroupController
});
const _groupservice = require("../services/group.service");
const _typedi = _interop_require_default(require("typedi"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let GroupController = class GroupController {
    constructor(){
        _define_property(this, "group", _typedi.default.get(_groupservice.GroupService));
        _define_property(this, "getMyGroups", async (req, res, next)=>{
            try {
                const userID = req.user.id;
                const findMyGroups = await this.group.findMyGroups(userID);
                res.status(200).json({
                    data: findMyGroups,
                    message: "findAll"
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "getGroupById", async (req, res, next)=>{
            try {
                const groupID = Number(req.params.id);
                const userID = req.user.id;
                const findGroupById = await this.group.findGroupById(groupID, userID);
                res.status(200).json({
                    data: findGroupById,
                    message: "findOne"
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "createGroup", async (req, res, next)=>{
            try {
                const name = req.body.name;
                const description = req.body.description;
                const user = req.user;
                const newGroup = await this.group.createGroup(name, user, description);
                res.status(201).json({
                    data: newGroup,
                    message: "created"
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "leaveGroup", async (req, res, next)=>{
            try {
                const groupID = Number(req.body.id);
                const userID = req.user.id;
                const findGroup = await this.group.leaveGroup(groupID, userID);
                res.status(200).json({
                    data: findGroup,
                    message: "left"
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "joinGroup", async (req, res, next)=>{
            try {
                const code = req.body.joinCode;
                const userID = req.user.id;
                const findGroup = await this.group.joinGroup(code, userID);
                res.status(200).json({
                    data: findGroup,
                    message: "joined"
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "shareGroup", async (req, res, next)=>{
            try {
                const groupID = Number(req.params.id);
                const userID = req.user.id;
                const joinCode = await this.group.shareGroup(groupID, userID);
                res.status(200).json({
                    data: joinCode,
                    message: "shared"
                });
            } catch (error) {
                next(error);
            }
        });
    }
};

//# sourceMappingURL=group.controller.js.map