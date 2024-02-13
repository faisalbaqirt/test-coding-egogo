const { Pool } = require("pg");

const pool = new Pool({
  user: "platinum",
  database: "test_coding",
  password: "140451",
  port: 5432,
});

module.exports = pool;
