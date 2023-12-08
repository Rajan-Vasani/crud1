import { Sequelize, DataTypes } from "sequelize";
import {empDetails} from "../models/empModel";
import { db_host, db_port, db_name, db_user, db_password } from "../config";
export const sequelize = new Sequelize(db_name, db_user, db_password, {
  host: db_host,
  port: db_port,
  dialect: "postgres",
  logging: true
});
export const psqlConn = async () => {
  try {
    await sequelize.authenticate();
    console.log("Postgres Database connected");
    await sequelize.sync({alter: true});
    console.log("Models synced successfully.");
  } catch (err) {
    console.log("Unable to connect to database", err);
  }
};
