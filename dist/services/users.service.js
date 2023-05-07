"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserService", {
    enumerable: true,
    get: ()=>UserService
});
const _typeorm = require("typeorm");
const _typedi = require("typedi");
const _usersentity = require("../entities/users.entity");
const _HttpException = require("../exceptions/HttpException");
const _axios = _interop_require_default(require("axios"));
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
var __decorate = (void 0) && (void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let UserService = class UserService extends _typeorm.Repository {
    async findAllUser() {
        const users = await _usersentity.UserEntity.find();
        return users;
    }
    async findUserById(userId) {
        const findUser = await _usersentity.UserEntity.findOne({
            where: {
                id: userId
            }
        });
        if (!findUser) throw new _HttpException.HttpException(409, "User doesn't exist");
        return findUser;
    }
    async createUser(userData) {
        var url = 'https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=' + userData.googleToken;
        var user;
        var response;
        try {
            response = await _axios.default.get(url);
        } catch (e) {
            if (e.response.status == 400) {
                throw new _HttpException.HttpException(409, "Token doesn't match email");
            } else throw new _HttpException.HttpException(409, "Error");
        }
        if (userData.email != response.data.email) throw new _HttpException.HttpException(409, "Token doesn't match email");
        else {
            var findUser = await _usersentity.UserEntity.findOne({
                where: {
                    email: userData.email
                }
            });
            if (findUser == null) {
                const createUserData = await _usersentity.UserEntity.create(_object_spread({}, userData)).save();
                return createUserData;
            }
            return findUser;
        }
    }
    async updateUser(userId, userData) {
        const findUser = await _usersentity.UserEntity.findOne({
            where: {
                id: userId
            }
        });
        if (!findUser) throw new _HttpException.HttpException(409, "User doesn't exist");
        await _usersentity.UserEntity.update(userId, _object_spread({}, userData));
        const updateUser = await _usersentity.UserEntity.findOne({
            where: {
                id: userId
            }
        });
        return updateUser;
    }
    async deleteUser(userId) {
        const findUser = await _usersentity.UserEntity.findOne({
            where: {
                id: userId
            }
        });
        if (!findUser) throw new _HttpException.HttpException(409, "User doesn't exist");
        await _usersentity.UserEntity.delete({
            id: userId
        });
        return findUser;
    }
};
UserService = __decorate([
    (0, _typedi.Service)(),
    (0, _typeorm.EntityRepository)()
], UserService);

//# sourceMappingURL=users.service.js.map