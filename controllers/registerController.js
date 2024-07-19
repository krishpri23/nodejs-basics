const userDB = {
  // more like use state in react
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const fsPromises = require("fs").promises;
const path = require("path");
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { user, pwd } = req.body;

  if (!user || !pwd)
    return res.status(400).json({ message: "Username and password required" });

  // check for duplicate  user
  const duplicate = userDB.users.find((person) => person.username === user);
  if (duplicate) return res.sendStatus(409); // conflict

  try {
    // encrypt pwd
    const hashedPwd = await bcrypt.hash(pwd, 10); // saltRound

    //store the new user
    const newUser = {
      username: user,
      password: hashedPwd,
      roles: {
        User: 2001,
      },
    };
    userDB.setUsers([...userDB.users, newUser]);
    await fsPromises.writeFile(
      path.join(__dirname, "..", "model", "users.json"), //destination
      //actual data to write
      JSON.stringify(userDB.users)
    );

    res.status(201).json({ success: "new user created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { handleNewUser };
