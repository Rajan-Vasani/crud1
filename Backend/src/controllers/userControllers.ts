// import { log } from "console";
import { Request, Response, NextFunction } from "express";
import { userModel } from "../models/userModel";

export const getUsers = (req: Request, res: Response, next: NextFunction) => {
  // res.json(users);
  userModel.find()
    .then((Response) => {
      res.json(Response);
    })
    .catch((err: any) => {
      console.log("Error in data fetching", err);
      res.json(err);
    });
};

export const addUser = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);

  const newUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  const addNewUser = new userModel(newUser);
  addNewUser.save()
    .then(() => {
      res.json({ message: "User Added successfully" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error in adding the user");
    });
};

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  let id: string = req.body.id;
  const isUserId:any = await userModel.find({_id:id})
  // console.log(isUserId);
  
  if(!isUserId.length){
    res.json("User not found")
  }else{
    userModel
    .findByIdAndUpdate({ _id: id }, req.body)
    .then((response: any) => {
      res.json({ message: "user updated successfully", success: true });
    })
    .catch((err) => {
      res.json({ message: "failed to update user", success: true });
    });
  }

};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  let id: string = req.body.id;
  const isUserId:any = await userModel.find({_id:id})
  // console.log(isUserId);
  
  if(!isUserId.length){
    res.json("User not found")
  }else{
    userModel
    .findByIdAndDelete({ _id: id }, req.body)
    .then((response: any) => {
      res.json({ message: "user deleted successfully", success: true });
    })
    .catch((err) => {
      res.json({ message: "failed to delete user", success: true });
    });
  }

};
