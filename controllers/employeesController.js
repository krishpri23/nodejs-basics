const Employee = require("../model/Employee");

const getAllEmployees = async (req, res) => {
  const employees = await Employee.find();

  if (!employees)
    //204 - No content
    return res.status(204).json({ message: "No employees found" });
  res.json(employees);
};

const createNewEmployee = async (req, res) => {
  if (!req?.body?.firstname || !req?.body?.lastname) {
    // 400 bad req
    return res.status(400).json({ message: "first and lastname required" });
  }

  try {
    const result = await Employee.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    });

    res.status(201).json(result);
  } catch (error) {}

  if (!newEmployee.firstname || !newEmployee.lastname) {
    return res
      .status(400)
      .json({ message: "First and last names are required." });
  }

  data.setEmployees([...data.employees, newEmployee]);
  res.status(201).json(data.employees);
};

const updateEmployee = async (req, res) => {
  if (!req?.body?.id) {
    // 400 bad req
    return res.status(400).json({ message: "ID param is required" });
  }

  const employee = await Employee.findOne({ _id: req.body.id }).exec();

  if (!employee)
    return res.status(204).json({ message: "No employee match found" });

  if (req.body.firstname) employee.firstname = req.body.firstname;
  if (req.body.lastname) employee.lastname = req.body.lastname;

  const result = await employee.save();
  res.json(result);
};

const deleteEmployee = async (req, res) => {
  if (!req?.body?.id) {
    // 400 bad req
    return res.status(400).json({ message: "ID param is required" });
  }
  const employee = await Employee.findOne({
    _id: req.body.id,
  }).exec();

  if (!employee)
    return res.status(204).json({ message: "No employee match found" });

  const result = await employee.deleteOne({ _id: req.body.id });
  res.json(result);
};

const getEmployee = async (req, res) => {
  if (!req?.params?.id)
    return res.status(400).json({ message: " Emp ID is required" });

  const employee = await Employee.findOne({
    _id: req.params.id,
  }).exec();

  if (!employee)
    return res.status(204).json({ message: "No employee match found" });

  res.json(employee);
};

module.exports = {
  getAllEmployees,
  createNewEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
};
