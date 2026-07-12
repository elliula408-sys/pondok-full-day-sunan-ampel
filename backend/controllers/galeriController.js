const db = require("../config/db");

const tambahGaleri = (req, res) => {
  const { nama_acara, deskripsi, tanggal } = req.body;

  const foto = req.file ? req.file.filename : null;

  const sql = `
    INSERT INTO galeri
    (nama_acara, deskripsi, foto, tanggal)
    VALUES (?,?,?,?)
  `;

  db.query(sql, [nama_acara, deskripsi, foto, tanggal], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({
      message: "Galeri berhasil ditambahkan",
    });
  });
};

const getGaleri = (req, res) => {
  db.query("SELECT * FROM galeri ORDER BY tanggal DESC", (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
};

const hapusGaleri = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM galeri WHERE id=?", [id], (err) => {
    if (err) return res.status(500).json(err);

    res.json({
      message: "Galeri berhasil dihapus",
    });
  });
};

module.exports = {
  tambahGaleri,
  getGaleri,
  hapusGaleri,
};
