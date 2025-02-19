import fs from "fs";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  const rawUserData = fs.readFileSync("src/db/users.json");
  const users = JSON.parse(rawUserData);

  const { firstName, lastName, username, password, age } = req.body;
  const newUser = [firstName, lastName, username, password, age];

  console.log(newUser);

  if (newUser.some((value) => !value)) {
    return res.status(400).json({
      success: false,
      message: "All fields are required!",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10); // 10 = salt rounds

  const userToSave = {
    firstName,
    lastName,
    username,
    password: hashedPassword,
    age,
  };

  users.push(userToSave);

  fs.writeFileSync("src/db/users.json", JSON.stringify(users, null, 2));

  return res.status(201).json({
    success: true,
    message: "User created successfully!",
    user: { firstName, lastName, username, age, password}, // Don't return the password!
  });
};
