const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const pendapatanRoute = require("./routes/pendapatanRoute");
app.use("/pendapatan", pendapatanRoute);

const pengeluaranRoute = require("./routes/pengeluaranRoute");
app.use("/pengeluaran", pengeluaranRoute);

const penghasilanRoute = require("./routes/penghasilanRoute");
app.use("/penghasilan", penghasilanRoute);

app.listen(5000, () => {
  console.log("listening on port 5000");
});
