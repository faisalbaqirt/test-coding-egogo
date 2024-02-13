import axios from "axios";

export const getTotalPendapatan = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5000/penghasilan/pendapatan"
    );
    return response.data
  } catch (err) {
    throw err;
  }
};

export const getTotalPengeluaran = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5000/penghasilan/pengeluaran"
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};
