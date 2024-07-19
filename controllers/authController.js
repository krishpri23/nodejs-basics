const userDB = {
  // more like use state in react
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const fsPromises = require("fs").promises;
const path = require("path");

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
    const accessToken = jwt.sign(
      { username: foundUser.username }, //payload
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1m" }
    );

    //save refresh token in DB to invalidate the refresh token when user logs out
    const refreshToken = jwt.sign(
      { username: foundUser.username }, //payload
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "30m" }
    );

    const otherUsers = userDB.users.filter(
      (person) => person.username != foundUser.username
    );

    // saving refreshToken with current user
    const currentUser = { ...foundUser, refreshToken };
    userDB.setUsers([...otherUsers, currentUser]);

    await fsPromises.writeFile(
      path.join(__dirname, "..", "model", "users.join"),
      JSON.stringify(userDB.users)
    );

    // sent with every request
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    res.json({ accessToken });
  } else {
    res.sendStatus(401);
  }
};

module.exports = { handleLogin };
