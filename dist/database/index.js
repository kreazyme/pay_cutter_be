"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "dbConnection", {
    enumerable: true,
    get: ()=>dbConnection
});
const _path = require("path");
const _config = require("../config");
const dbConnection = {
    type: 'postgres',
    username: _config.DB_USER,
    password: _config.DB_PASSWORD,
    host: _config.DB_HOST,
    port: Number(_config.DB_PORT),
    database: _config.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [
        (0, _path.join)(__dirname, '../**/*.entity{.ts,.js}')
    ],
    migrations: [
        (0, _path.join)(__dirname, '../**/*.migration{.ts,.js}')
    ],
    subscribers: [
        (0, _path.join)(__dirname, '../**/*.subscriber{.ts,.js}')
    ],
    cli: {
        entitiesDir: 'src/entities',
        migrationsDir: 'src/migration',
        subscribersDir: 'src/subscriber'
    }
};

//# sourceMappingURL=index.js.map