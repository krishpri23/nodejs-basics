const User = require(".././model/User");
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { user, pwd } = req.body;

  if (!user || !pwd)
    return res.status(400).json({ message: "Username and password required" });

  // check for duplicate usernames in db
  // exec for async await required
  const duplicate = await User.findOne({ username: user }).exec();
  if (duplicate) return res.sendStatus(409); // conflict

  try {
    // encrypt pwd
    const hashedPwd = await bcrypt.hash(pwd, 10); // saltRound

    // create and store new user
    const result = await User.create({
      username: user,
      password: hashedPwd,
      // roles not required as it is default
      // roles: {
      //   User: 2001,
      // },
    });

    // Also correct
    // const newUser = new User();
    // newUser.username = user;

    console.log(result);

    res.status(201).json({ success: "new user created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { handleNewUser };
