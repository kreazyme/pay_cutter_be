"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "GroupService", {
    enumerable: true,
    get: ()=>GroupService
});
const _groupentity = require("../entities/group.entity");
const _usersentity = require("../entities/users.entity");
const _typedi = require("typedi");
const _typeorm = require("typeorm");
const _HttpException = require("../exceptions/HttpException");
var __decorate = (void 0) && (void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let GroupService = class GroupService extends _typeorm.Repository {
    async findMyGroups(userID) {
        console.log(userID);
        const groups = await _groupentity.GroupEntity.getRepository().createQueryBuilder("groups").leftJoinAndSelect("groups.participants", "participants").select([
            "groups.id",
            "groups.name",
            "groups.description",
            "groups.createdAt",
            "groups.updatedAt",
            "participants.id",
            "participants.email",
            "participants.createdAt"
        ]).getMany();
        return groups;
    }
    async findGroupById(groupID, userID) {
        const findGroup = await _groupentity.GroupEntity.getRepository().createQueryBuilder("groups").leftJoinAndSelect("groups.participants", "participants").where("groups.id = :id", {
            id: groupID
        }).getOne();
        if (findGroup === undefined) {
            throw new _HttpException.HttpException(404, "Group not found");
        }
        if (findGroup.participants.find((participant)=>participant.id === userID)) {
            return findGroup;
        }
        throw new _HttpException.HttpException(401, "Unauthorized");
    }
    async createGroup(groupName, user, description) {
        const newGroup = await _groupentity.GroupEntity.create({
            name: groupName,
            description: description,
            participants: [
                user
            ]
        }).save();
        return newGroup;
    }
    async leaveGroup(groupID, userID) {
        console.log(groupID, userID);
        const group = await _groupentity.GroupEntity.getRepository().createQueryBuilder("groups").leftJoinAndSelect("groups.participants", "participants").where("groups.id = :id", {
            id: groupID
        }).getOne();
        if (group) {
            if (group.participants.find((participant)=>participant.id === userID)) {
                group.participants = group.participants.filter((participant)=>participant.id !== userID);
                await group.save();
                return group;
            }
            throw new _HttpException.HttpException(404, "User not in group");
        } else {
            throw new _HttpException.HttpException(404, "Group not found");
        }
    }
    async joinGroup(code, userID) {
        const group = await _groupentity.GroupEntity.getRepository().createQueryBuilder("groups").leftJoinAndSelect("groups.participants", "participants").where("groups.joinCode = :joinCode", {
            joinCode: code
        }).getOne();
        if (group) {
            const findUser = await _usersentity.UserEntity.findOne({
                where: {
                    id: userID
                }
            });
            if (group.participants.find((participant)=>participant.id === userID)) {
                throw new _HttpException.HttpException(409, "User already in group");
            }
            group.participants.push(findUser);
            await group.save();
            return group;
        } else {
            throw new _HttpException.HttpException(404, "Group not found");
        }
    }
    async shareGroup(groupID, userID) {
        const findGroup = await _groupentity.GroupEntity.getRepository().createQueryBuilder("groups").leftJoinAndSelect("groups.participants", "participants").where("groups.id = :id", {
            id: groupID
        }).getOne();
        if (findGroup === undefined) {
            throw new _HttpException.HttpException(404, "Group not found");
        }
        if (findGroup.participants.find((participant)=>participant.id === userID)) {
            var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
            var codeGen = "";
            for(var i = 0; i < 12; i++)codeGen += charset[Math.floor(Math.random() * charset.length)];
            findGroup.joinCode = codeGen;
            findGroup.joinCodeExpires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7);
            await findGroup.save();
            return codeGen;
        }
        throw new _HttpException.HttpException(401, "Unauthorized");
    }
};
GroupService = __decorate([
    (0, _typedi.Service)(),
    (0, _typeorm.EntityRepository)()
], GroupService);

//# sourceMappingURL=group.service.js.map