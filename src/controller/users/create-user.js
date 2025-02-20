import bcrypt from "bcrypt";
import { Users } from "../modules/comment.model.js";
import fs from "fs";

export const createUser = async (req, res) => {
  const {name} = req.body
  try {

    const users = await Users.create({
      name: name
    })
    res.send(users)

  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ success: false, message: "Error creating user" });
  }
};
