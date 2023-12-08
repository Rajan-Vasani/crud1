"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.psqlConn = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
exports.sequelize = new sequelize_1.Sequelize(config_1.db_name, config_1.db_user, config_1.db_password, {
    host: config_1.db_host,
    port: config_1.db_port,
    dialect: "postgres",
    logging: true
});
const psqlConn = async () => {
    try {
        await exports.sequelize.authenticate();
        console.log("Postgres Database connected");
        await exports.sequelize.sync({ alter: true });
        console.log("Models synced successfully.");
    }
    catch (err) {
        console.log("Unable to connect to database", err);
    }
};
exports.psqlConn = psqlConn;
//# sourceMappingURL=dbConn.js.map