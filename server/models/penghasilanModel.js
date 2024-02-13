const pool = require("../db/config");

const totalPendapatan = async () => {
  const query =
    "SELECT pendapatan_satu + pendapatan_dua + lainnya AS total_pendapatan FROM pendapatan";
  const result = await pool.query(query);
  return result.rows[0].total_pendapatan;
};

const totalPengeluaran = async () => {
  const query =
    "SELECT sewa + listrik + gas + ponsel + bahan_makanan + pembayaran_mobil + pengeluaran_otomatis + pinjaman_kuliah + kartu_kredit + asuransi_kendaraan + perawatan_pribadi + hiburan + lainnya AS total_pengeluaran FROM pengeluaran";
  const result = await pool.query(query);
  return result.rows[0].total_pengeluaran;
};

module.exports = {
  totalPendapatan,
  totalPengeluaran,
};
