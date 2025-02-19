import fs from "fs";

export const loginUser = (req, res) => {
  const rawUserData = fs.readFileSync("src/db/users.json");
  const users = JSON.parse(rawUserData);

  const { username, password } = req.body;

  const userExists = users.some((user) => user.username === username);
  const passwordMatches = users.some((user) => user.password === password);

  if (userExists && passwordMatches) {
    return res.status(200).json({
      success: true,
      message: "This account already exists!",
    });
  } else {
    return res.status(400).json({
      success: false,
      message: "This does not exists!",
    });
  }
};
