// defines a middleware function verifyJWT for an Express.js application. If the token is valid, it allows the request to proceed to the next middleware or route handler.

const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader?.startsWith("Bearer ")) return res.sendStatus(401);
  // console.log(authHeader); // Bearer token
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log("Invalid JWT");
      return res.sendStatus(403); //invalid token
    }

    // If the token is valid, it extracts user information from the decoded token and attaches it to the req object, making it available for subsequent middleware or route handlers.
    req.user = decoded.UserInfo.username;
    req.roles = decoded.UserInfo.roles;
    next();
  });
};

module.exports = verifyJWT;
