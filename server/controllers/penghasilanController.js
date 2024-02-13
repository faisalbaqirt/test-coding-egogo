const penghasilanModel = require("../models/penghasilanModel");

const getTotalPendapatan = async (req, res) => {
  try {
    const result = await penghasilanModel.totalPendapatan();

    return res.status(200).json({
      status: 200,
      pendapatan: result,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: err.message,
    });
  }
};

const getTotalPengeluaran = async (req, res) => {
  try {
    const result = await penghasilanModel.totalPengeluaran();

    return res.status(200).json({
      status: 200,
      pengeluaran: result,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: err.message,
    });
  }
};

module.exports = {
  getTotalPendapatan,
  getTotalPengeluaran,
};
