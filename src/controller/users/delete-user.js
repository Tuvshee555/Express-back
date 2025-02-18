import fs from "fs";

export const deleteUser = (req, res) => {
  const rawUSerdata = fs.readFileSync("src/db/users.json");
  const users = JSON.parse(rawUSerdata);

  const { username } = req.body;
  console.log(req.body);

  const filteredUsers = users.filter((user) => user.username !== username);

  if (filteredUsers.length === users.length) {
    return res.send("nothing to delete!!");
  }

  fs.writeFileSync("src/db/users.json", JSON.stringify(filteredUsers));

  return res.send(`Successfully deleted ${username}`);
};
