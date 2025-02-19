import fs from "fs";

export const editUser = (req, res) => {
  const rawUSerdata = fs.readFileSync("src/db/users.json");
  const users = JSON.parse(rawUSerdata);

  const { datas } = req.body;
  console.log(req.body);

  // const filteredPerson = users.filter((value) => value.username ===  )
};
