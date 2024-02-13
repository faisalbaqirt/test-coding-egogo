const pendapatanModel = require("../models/pendapatanModel");

const getAllPendapatan = async (req, res) => {
  try {
    const data = await pendapatanModel.getAllPendapatan();

    return res.status(200).json({
      status: 200,
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: err.message,
    });
  }
};

const insertData = async (req, res) => {
  try {
    const { pendapatanSatu, pendapatanDua, lainnya } = req.body;

    await pendapatanModel.insertData(pendapatanSatu, pendapatanDua, lainnya);

    return res.status(201).json({
      status: 201,
      pendapatanSatu: pendapatanSatu,
      pendapatanDua: pendapatanDua,
      lainnya: lainnya,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: err.message,
    });
  }
};

module.exports = {
  getAllPendapatan,
  insertData,
};
