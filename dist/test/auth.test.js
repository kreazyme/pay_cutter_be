"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _bcrypt = _interop_require_default(require("bcrypt"));
const _supertest = _interop_require_default(require("supertest"));
const _typeorm = require("typeorm");
const _app = require("../app");
const _authroute = require("../routes/auth.route");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
afterAll(async ()=>{
    await (0, _typeorm.getConnection)().close();
});
describe('Testing Auth', ()=>{
    describe('[POST] /signup', ()=>{
        it('response should have the Create userData', async ()=>{
            const userData = {
                email: 'test@email.com',
                password: 'q1w2e3r4!'
            };
            const authRoute = new _authroute.AuthRoute();
            const userRepository = new _typeorm.Repository();
            userRepository.findOne = jest.fn().mockReturnValue(null);
            userRepository.save = jest.fn().mockReturnValue({
                id: 1,
                email: userData.email,
                password: await _bcrypt.default.hash(userData.password, 10)
            });
            const app = new _app.App([
                authRoute
            ]);
            return (0, _supertest.default)(app.getServer()).post(`${authRoute.path}signup`).send(userData).expect(201);
        });
    });
    describe('[POST] /login', ()=>{
        it('response should have the Set-Cookie header with the Authorization token', async ()=>{
            const userData = {
                email: 'test@email.com',
                password: 'q1w2e3r4!'
            };
            const authRoute = new _authroute.AuthRoute();
            const userRepository = new _typeorm.Repository();
            userRepository.findOne = jest.fn().mockReturnValue({
                id: 1,
                email: userData.email,
                password: await _bcrypt.default.hash(userData.password, 10)
            });
            const app = new _app.App([
                authRoute
            ]);
            return (0, _supertest.default)(app.getServer()).post(`${authRoute.path}login`).send(userData).expect('Set-Cookie', /^Authorization=.+/);
        });
    });
});

//# sourceMappingURL=auth.test.js.map