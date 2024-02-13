const pendapatanController = require("../controllers/pendapatanController");
const express = require("express");
const route = express.Router();

route.get("/", pendapatanController.getAllPendapatan);
route.post("/", pendapatanController.insertData);

module.exports = route;
