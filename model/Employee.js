const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  // id will be created automatically
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
});

// by default, mongodb will create employees
module.exports = mongoose.model("Employee", employeeSchema);
