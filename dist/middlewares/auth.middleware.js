"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthMiddleware", {
    enumerable: true,
    get: ()=>AuthMiddleware
});
const _jsonwebtoken = require("jsonwebtoken");
const _config = require("../config");
const _usersentity = require("../entities/users.entity");
const _HttpException = require("../exceptions/HttpException");
const getAuthorization = (req)=>{
    const coockie = req.cookies['Authorization'];
    if (coockie) return coockie;
    const header = req.header('Authorization');
    if (header) return header.split('Bearer ')[1];
    return null;
};
const AuthMiddleware = async (req, res, next)=>{
    try {
        const Authorization = getAuthorization(req);
        if (Authorization) {
            const { id  } = await (0, _jsonwebtoken.verify)(Authorization, _config.SECRET_KEY);
            const findUser = await _usersentity.UserEntity.createQueryBuilder('user').where('user.id = :id', {
                id
            }).addSelect('user.password').getOne();
            if (findUser) {
                req.user = findUser;
                next();
            } else {
                next(new _HttpException.HttpException(401, 'Wrong authentication token'));
            }
        } else {
            next(new _HttpException.HttpException(404, 'Authentication token missing'));
        }
    } catch (error) {
        next(new _HttpException.HttpException(401, 'Wrong authentication token'));
    }
};

//# sourceMappingURL=auth.middleware.js.map