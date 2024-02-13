const penghasilanController = require("../controllers/penghasilanController");
const express = require("express");
const route = express.Router();

route.get("/pendapatan", penghasilanController.getTotalPendapatan);
route.get("/pengeluaran", penghasilanController.getTotalPengeluaran);

module.exports = route;
