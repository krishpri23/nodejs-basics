const userDB = {
  // more like use state in react
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const bcrypt = require("bcrypt");

const handleLogin = async (req, res) => {
  const { user, pwd } = req.body;

  if (!user || !pwd)
    return res.status(400).json({ message: "Username and password required" });

  // to check if the user exists in the db
  const foundUser = userDB.users.find((person) => person.username === user);

  if (!foundUser) return res.sendStatus(401); // unauthorized

  //evaluate password

  const match = await bcrypt.compare(pwd, foundUser.password);

  if (match) {
    // create JWTs
    res.json({ message: `${user} logged in` });
  } else {
    res.sendStatus(401);
  }
};

module.exports = { handleLogin };
