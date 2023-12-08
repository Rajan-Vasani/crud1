import express, {Router} from "express"
import { getUsers,addUser, updateUser,deleteUser } from "../controllers/userControllers";

const router:Router = express.Router();

router.get("/users",getUsers)

router.post("/addUser",addUser)

router.put("/updateUser",updateUser)

router.delete("/deleteUser",deleteUser)

export default router