const pengeluaranController = require("../controllers/pengeluaranController");
const express = require("express");
const route = express.Router();

route.get("/", pengeluaranController.getAllPengeluaran);
route.post("/", pengeluaranController.insertData);

module.exports = route;
