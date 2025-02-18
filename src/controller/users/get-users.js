import fs from "fs";

export const getUsers = (req, res) => {
  const rawUSerdata = fs.readFileSync("src/db/users.json");
  const users = JSON.parse(rawUSerdata);
  res.send(users);
};
