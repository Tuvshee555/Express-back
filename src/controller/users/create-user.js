import fs from "fs";

export const createUser = (req, res) => {
  const rawUSerdata = fs.readFileSync("src/db/users.json");
  const users = JSON.parse(rawUSerdata);

  const { firstName, lastName, username, password, age } = req.body;
  const newUser = [firstName, lastName, username, password, age];
  console.log(newUser);

  if (newUser.some((value) => !value)) {
    return res.status(200).json({
      success: true,
      message: "Value is not full!",
    });
  } else {
    users.push(req.body);
    fs.writeFileSync("src/db/users.json", JSON.stringify(users));

    return res.send({ newUser: req.body });
  }
};
