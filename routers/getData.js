const express = require("express");
const router = express.Router();
const data = require("../data.json");


router.get("/", (req, res) => {
  res.send(data);
});

router.get("/:id", async (req, res) => {
  let employeeData = await data;
  let result = employeeData.employees.filter(
    (employee) => req.params.id == employee.id
  );
  res.send(result);
});

module.exports = router;
