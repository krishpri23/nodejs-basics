const data = {};

// connect with db to get the data
data.employees = require("../modal/employees.json");

const getAllEmployees = (req, res) => {
  res.json(data.employees);
};

module.exports = { getAllEmployees };
