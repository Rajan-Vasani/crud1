import mongoose from "mongoose";
const mongo_url = "mongodb://localhost:127017/userDetails";

mongoose.connect(mongo_url);

const db = mongoose.connection;
db.on("error", (error) => console.error("MongoDB connection error:", error));
db.once("open", () => console.log("Connected to MongoDB successfully"));

export default {db};