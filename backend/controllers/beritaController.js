const db = require("../config/db");

const tambahBerita = (req, res) => {
  const { judul, isi } = req.body;

  const thumbnail = req.file ? req.file.filename : null;

  const slug = judul.toLowerCase().replace(/\s+/g, "-");

  const sql = `
  INSERT INTO berita
  (judul,slug,thumbnail,isi)
  VALUES (?,?,?,?)
  `;

  db.query(sql, [judul, slug, thumbnail, isi], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({
      message: "Berita berhasil ditambahkan",
    });
  });
};

const getBerita = (req, res) => {
  db.query("SELECT * FROM berita ORDER BY id DESC", (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
};

const detailBerita = (req, res) => {
  const { id } = req.params;

  db.query("SELECT * FROM berita WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result[0]);
  });
};

const hapusBerita = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM berita WHERE id=?", [id], (err) => {
    if (err) return res.status(500).json(err);

    res.json({
      message: "Berita berhasil dihapus",
    });
  });
};

module.exports = {
  tambahBerita,
  getBerita,
  detailBerita,
  hapusBerita,
};
