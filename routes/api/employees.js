const express = require("express");
const router = express.Router();
const path = require("path");
const data = {};

// connect with db to get the data
data.employees = require("../../data/employees.json");

// GET and POST can go the same route
router
  .route("/")
  .get((req, res) => {
    res.json(data.employees);
  })
  .post((req, res) => {
    // we get params with req as it is post
    // post a new employee

    res.json({ firstname: req.body.firstname, lastname: req.body.lastname });
  })
  // update an employee
  .put((req, res) => {
    res.json({ firstname: req.body.firstname, lastname: req.body.lastname });
  });

// GET req with a named params
router.route("/:id").get((req, res) => {
  res.json({ id: req.params.id });
});
module.exports = router;
