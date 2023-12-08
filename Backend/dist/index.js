"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dbConn_1 = require("./db/dbConn");
// import db from './db/dbConnection'
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 3000;
// --------- MongoDB Database connection -------------------
const mongo_url = "mongodb://127.0.0.1:27017/userDetails";
mongoose_1.default.connect(mongo_url);
const db = mongoose_1.default.connection;
db.on("error", (error) => console.error("MongoDB connection error:", error));
db.once("open", () => console.log("Connected to MongoDB successfully"));
// -------------------------------------------------
(0, dbConn_1.psqlConn)().then(() => {
    console.log("fda");
}).catch((err) => {
    console.error(err);
});
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send("Hello World! Server running successfully");
});
app.use("/user", userRoutes_1.default);
app.use("/employee", userRoutes_1.default);
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});
//# sourceMappingURL=index.js.map