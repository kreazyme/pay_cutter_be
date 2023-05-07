"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthService", {
    enumerable: true,
    get: ()=>AuthService
});
const _bcrypt = require("bcrypt");
const _jsonwebtoken = require("jsonwebtoken");
const _typedi = require("typedi");
const _typeorm = require("typeorm");
const _config = require("../config");
const _usersentity = require("../entities/users.entity");
const _HttpException = require("../exceptions/HttpException");
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
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
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
const createToken = (user)=>{
    const dataStoredInToken = {
        id: user.id
    };
    const secretKey = _config.SECRET_KEY;
    const expiresIn = 60 * 60 * 24 * 7 * 52;
    return {
        expiresIn,
        token: (0, _jsonwebtoken.sign)(dataStoredInToken, secretKey, {
            expiresIn
        })
    };
};
const createCookie = (tokenData)=>{
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
};
let AuthService = class AuthService extends _typeorm.Repository {
    async signup(userData) {
        const findUser = await _usersentity.UserEntity.createQueryBuilder('user').where('user.email = :email', {
            email: userData.email
        }).addSelect('user.password').getOne();
        if (findUser) throw new _HttpException.HttpException(409, `This email ${userData.email} already exists`);
        const hashedPassword = await (0, _bcrypt.hash)(userData.password, 10);
        const createUserData = await _usersentity.UserEntity.create(_object_spread_props(_object_spread({}, userData), {
            password: hashedPassword
        })).save();
        return createUserData;
    }
    async login(userData) {
        const findUser = await _usersentity.UserEntity.createQueryBuilder('user').where('user.email = :email', {
            email: userData.email
        }).addSelect('user.password').getOne();
        if (!findUser) throw new _HttpException.HttpException(409, `This email ${userData.email} was not found`);
        const isPasswordMatching = await (0, _bcrypt.compare)(userData.password, findUser.password);
        if (!isPasswordMatching) throw new _HttpException.HttpException(409, "Password not matching");
        const tokenData = createToken(findUser);
        const cookie = createCookie(tokenData);
        const token = tokenData.token;
        return {
            cookie,
            findUser,
            token
        };
    }
    async logout(userData) {
        const findUser = await _usersentity.UserEntity.createQueryBuilder('user').where('user.email = :email', {
            email: userData.email
        }).where('user.password = :password', {
            password: userData.password
        }).addSelect('user.password').getOne();
        if (!findUser) throw new _HttpException.HttpException(409, "User doesn't exist");
        return findUser;
    }
};
AuthService = __decorate([
    (0, _typedi.Service)(),
    (0, _typeorm.EntityRepository)()
], AuthService);

//# sourceMappingURL=auth.service.js.map