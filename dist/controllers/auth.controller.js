"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthController", {
    enumerable: true,
    get: ()=>AuthController
});
const _typedi = require("typedi");
const _authservice = require("../services/auth.service");
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
let AuthController = class AuthController {
    constructor(){
        _define_property(this, "auth", _typedi.Container.get(_authservice.AuthService));
        _define_property(this, "signUp", async (req, res, next)=>{
            try {
                const userData = req.body;
                const signUpUserData = await this.auth.signup(userData);
                res.status(201).json({
                    data: signUpUserData,
                    message: 'signup'
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "logIn", async (req, res, next)=>{
            try {
                const userData = req.body;
                const { cookie , findUser , token  } = await this.auth.login(userData);
                res.setHeader('Set-Cookie', [
                    cookie
                ]);
                res.status(200).json({
                    data: findUser,
                    message: 'login',
                    token: token
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "logOut", async (req, res, next)=>{
            try {
                const userData = req.user;
                const logOutUserData = await this.auth.logout(userData);
                res.setHeader('Set-Cookie', [
                    'Authorization=; Max-age=0'
                ]);
                res.status(200).json({
                    data: logOutUserData,
                    message: 'logout'
                });
            } catch (error) {
                next(error);
            }
        });
    }
};

//# sourceMappingURL=auth.controller.js.map