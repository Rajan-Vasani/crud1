"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.addUser = exports.getUsers = void 0;
const userModel_1 = require("../models/userModel");
const getUsers = (req, res, next) => {
    // res.json(users);
    userModel_1.userModel.find()
        .then((Response) => {
        res.json(Response);
    })
        .catch((err) => {
        console.log("Error in data fetching", err);
        res.json(err);
    });
};
exports.getUsers = getUsers;
const addUser = (req, res, next) => {
    console.log(req.body);
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    };
    const addNewUser = new userModel_1.userModel(newUser);
    addNewUser.save()
        .then(() => {
        res.json({ message: "User Added successfully" });
    })
        .catch((error) => {
        console.error(error);
        res.status(500).send("Error in adding the user");
    });
};
exports.addUser = addUser;
const updateUser = async (req, res, next) => {
    let id = req.body.id;
    const isUserId = await userModel_1.userModel.find({ _id: id });
    // console.log(isUserId);
    if (!isUserId.length) {
        res.json("User not found");
    }
    else {
        userModel_1.userModel
            .findByIdAndUpdate({ _id: id }, req.body)
            .then((response) => {
            res.json({ message: "user updated successfully", success: true });
        })
            .catch((err) => {
            res.json({ message: "failed to update user", success: true });
        });
    }
};
exports.updateUser = updateUser;
const deleteUser = async (req, res, next) => {
    let id = req.body.id;
    const isUserId = await userModel_1.userModel.find({ _id: id });
    // console.log(isUserId);
    if (!isUserId.length) {
        res.json("User not found");
    }
    else {
        userModel_1.userModel
            .findByIdAndDelete({ _id: id }, req.body)
            .then((response) => {
            res.json({ message: "user deleted successfully", success: true });
        })
            .catch((err) => {
            res.json({ message: "failed to delete user", success: true });
        });
    }
};
exports.deleteUser = deleteUser;
