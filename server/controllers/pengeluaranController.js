const pengeluaranModel = require("../models/pengeluaranModel");

const getAllPengeluaran = async (req, res) => {
  try {
    const data = await pengeluaranModel.getAllPengeluaran();

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
    const {
      sewa,
      listrik,
      gas,
      ponsel,
      bahanMakanan,
      pembayaranMobil,
      pengeluaranOtomatis,
      pinjamanKuliah,
      kartuKredit,
      asuransiKendaraan,
      perawatanPribadi,
      hiburan,
      lainnya,
    } = req.body;

    await pengeluaranModel.insertData(
      sewa,
      listrik,
      gas,
      ponsel,
      bahanMakanan,
      pembayaranMobil,
      pengeluaranOtomatis,
      pinjamanKuliah,
      kartuKredit,
      asuransiKendaraan,
      perawatanPribadi,
      hiburan,
      lainnya
    );

    return res.status(201).json({
      status: 201,
      message: "successfully insert data",
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: err.message,
    });
  }
};

module.exports = {
  getAllPengeluaran,
  insertData,
};
