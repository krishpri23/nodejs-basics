const User = require("../model/User");

const handleLogout = async (req, res) => {
  const cookies = req.cookies;
  console.log("cookie from req", req.cookies);
  if (!cookies?.jwt) return res.sendStatus(204); // no content to send back
  const refreshToken = cookies.jwt;

  // Is refreshToken in DB
  const foundUser = await User.findOne({ refreshToken }).exec();

  if (!foundUser) {
    res.clearCookie("jwt", { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
    return res.sendStatus(204);
  }

  // delete refreshToken in DB
  foundUser.refreshToken = "";
  const result = await foundUser.save();
  console.log(result);
  usersDB.setUsers([...otherUsers, currentUser]);

  res.clearCookie("jwt", { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
  res.sendStatus(204);
};

module.exports = { handleLogout };
