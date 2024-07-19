const verifyRoles = (...allowedRoles) => {
  return (req, res, next) => {
    // req.roles is the roles of the user sent during login
    if (!req?.roles) return res.sendStatus(401);
    const rolesArray = [...allowedRoles];

    const result = req.roles
      .map((role) => rolesArray.includes(role))
      .find((val) => val === true);

    if (!result) return res.sendStatus(401);
    next();
  };
};

module.exports = verifyRoles;
