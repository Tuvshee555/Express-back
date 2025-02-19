import express from "express";
import { createUser } from "../controller/users/create-user.js";
import { getUsers } from "../controller/users/get-users.js";
import { deleteUser } from "../controller/users/delete-user.js";
import { loginUser } from "../controller/users/login-user.js";

export const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.post("/", createUser);
userRouter.delete("/", deleteUser);
userRouter.post("/login", loginUser);