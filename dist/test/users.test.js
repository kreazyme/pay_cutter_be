"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _bcrypt = _interop_require_default(require("bcrypt"));
const _supertest = _interop_require_default(require("supertest"));
const _typeorm = require("typeorm");
const _app = require("../app");
const _usersroute = require("../routes/users.route");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
afterAll(async ()=>{
    await (0, _typeorm.getConnection)().close();
});
describe('Testing Users', ()=>{
    describe('[POST] /users', ()=>{
        it('response Create user', async ()=>{
            const userData = {
                email: 'test@email.com',
                password: 'q1w2e3r4!'
            };
            const usersRoute = new _usersroute.UserRoute();
            const userRepository = new _typeorm.Repository();
            userRepository.findOne = jest.fn().mockReturnValue(null);
            userRepository.save = jest.fn().mockReturnValue({
                id: 1,
                email: userData.email,
                password: await _bcrypt.default.hash(userData.password, 10)
            });
            const app = new _app.App([
                usersRoute
            ]);
            return (0, _supertest.default)(app.getServer()).post(`${usersRoute.path}`).send(userData).expect(201);
        });
    });
    describe('[GET] /users', ()=>{
        it('response findAll users', async ()=>{
            const usersRoute = new _usersroute.UserRoute();
            const userRepository = new _typeorm.Repository();
            userRepository.find = jest.fn().mockReturnValue([
                {
                    id: 1,
                    email: 'a@email.com',
                    password: await _bcrypt.default.hash('q1w2e3r4!', 10)
                },
                {
                    id: 2,
                    email: 'b@email.com',
                    password: await _bcrypt.default.hash('a1s2d3f4!', 10)
                },
                {
                    id: 3,
                    email: 'c@email.com',
                    password: await _bcrypt.default.hash('z1x2c3v4!', 10)
                }
            ]);
            const app = new _app.App([
                usersRoute
            ]);
            return (0, _supertest.default)(app.getServer()).get(`${usersRoute.path}`).expect(200);
        });
    });
    describe('[GET] /users/:id', ()=>{
        it('response findOne user', async ()=>{
            const userId = 1;
            const usersRoute = new _usersroute.UserRoute();
            const userRepository = new _typeorm.Repository();
            userRepository.findOne = jest.fn().mockReturnValue({
                id: userId,
                email: 'a@email.com',
                password: await _bcrypt.default.hash('q1w2e3r4!', 10)
            });
            const app = new _app.App([
                usersRoute
            ]);
            return (0, _supertest.default)(app.getServer()).get(`${usersRoute.path}/${userId}`).expect(200);
        });
    });
    describe('[PUT] /users/:id', ()=>{
        it('response Update user', async ()=>{
            const userId = 1;
            const userData = {
                email: 'test@email.com',
                password: '1q2w3e4r!'
            };
            const usersRoute = new _usersroute.UserRoute();
            const userRepository = new _typeorm.Repository();
            userRepository.findOne = jest.fn().mockReturnValue({
                id: userId,
                email: userData.email,
                password: await _bcrypt.default.hash(userData.password, 10)
            });
            userRepository.update = jest.fn().mockReturnValue({
                generatedMaps: [],
                raw: [],
                affected: 1
            });
            userRepository.findOne = jest.fn().mockReturnValue({
                id: userId,
                email: userData.email,
                password: await _bcrypt.default.hash(userData.password, 10)
            });
            const app = new _app.App([
                usersRoute
            ]);
            return (0, _supertest.default)(app.getServer()).put(`${usersRoute.path}/${userId}`).send(userData).expect(200);
        });
    });
    describe('[DELETE] /users/:id', ()=>{
        it('response Delete user', async ()=>{
            const userId = 1;
            const usersRoute = new _usersroute.UserRoute();
            const userRepository = new _typeorm.Repository();
            userRepository.findOne = jest.fn().mockReturnValue({
                id: userId,
                email: 'a@email.com',
                password: await _bcrypt.default.hash('q1w2e3r4!', 10)
            });
            const app = new _app.App([
                usersRoute
            ]);
            return (0, _supertest.default)(app.getServer()).delete(`${usersRoute.path}/${userId}`).expect(200);
        });
    });
});

//# sourceMappingURL=users.test.js.map