const db = require("../config/db");

const getStatistik = (req, res) => {
  const sql = `
    SELECT
      (SELECT COUNT(*) FROM berita) as total_berita,
      (SELECT COUNT(*) FROM galeri) as total_galeri,
      (SELECT COUNT(*) FROM ppdb) as total_ppdb,
      (SELECT COUNT(*) FROM ppdb WHERE status='Diterima') as total_diterima,
      (SELECT COUNT(*) FROM ppdb WHERE status='Ditolak') as total_ditolak
  `;

  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result[0]);
  });
};

module.exports = {
  getStatistik,
};
