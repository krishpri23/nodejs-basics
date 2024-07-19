const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.sendStatus(401);
  console.log(authHeader); //Bearer Token
  const token = authHeader.split("")[1];
  console.log("token received in header", token);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403); // invalid token
    // we sent username in auth controller to jwt that is being decoded
    req.user = decoded.username;
    next();
  });
};

module.exports = verifyJWT;
