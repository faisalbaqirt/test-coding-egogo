const pool = require("../db/config");

const getAllPengeluaran = async () => {
  try {
    const query = "SELECT * FROM pengeluaran";
    const data = await pool.query(query);
    return data.rows;
  } catch (err) {
    throw err;
  }
};
const insertData = async (
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
) => {
  try {
    const query =
      "INSERT INTO pengeluaran (sewa, listrik, gas, ponsel, bahan_makanan, pembayaran_mobil, pengeluaran_otomatis, pinjaman_kuliah, kartu_kredit, asuransi_kendaraan, perawatan_pribadi, hiburan, lainnya) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)";
    const values = [
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
    ];
    await pool.query(query, values);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAllPengeluaran,
  insertData,
};
