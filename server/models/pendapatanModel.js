const pool = require("../db/config");

const getAllPendapatan = async () => {
  try {
    const query = "SELECT * FROM pendapatan";
    const data = await pool.query(query);
    return data.rows;
  } catch (err) {
    throw err;
  }
};

const insertData = async (pendapatanSatu, pendapatanDua, lainnya) => {
  try {
    const query =
      "INSERT INTO pendapatan (pendapatan_satu, pendapatan_dua, lainnya) VALUES ($1, $2, $3)";
    const values = [pendapatanSatu, pendapatanDua, lainnya];
    await pool.query(query, values);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAllPendapatan,
  insertData,
};
