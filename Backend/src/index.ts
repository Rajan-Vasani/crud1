import express, { Express, Request, Response } from "express";
import userRoutes from "./routes/userRoutes";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import {db_host,db_name,db_password,db_port} from "./config"
import {sequelize} from "./db/dbConn";
import {psqlConn} from "./db/dbConn";
// import db from './db/dbConnection'
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = 3000;
// --------- MongoDB Database connection -------------------
const mongo_url = "mongodb://127.0.0.1:27017/userDetails";

mongoose.connect(mongo_url);

const db = mongoose.connection;
db.on("error", (error) => console.error("MongoDB connection error:", error));
db.once("open", () => console.log("Connected to MongoDB successfully"));

// -------------------------------------------------
psqlConn().then(() =>{
  console.log("fda");
}).catch((err) =>{
  console.error(err);  
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! Server running successfully");
});

app.use("/user", userRoutes);
app.use("/employee", userRoutes);


app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
