const db = require("../config/db");

const daftarPPDB = (req, res) => {
  const {
    user_id,
    nik,
    nisn,
    nama_lengkap,
    tempat_lahir,
    tanggal_lahir,
    jenis_kelamin,
    alamat,
    sekolah_asal,
    no_telp,
    nama_ayah,
    pekerjaan_ayah,
    nama_ibu,
    pekerjaan_ibu,
    telp_ortu,
  } = req.body;

  const foto = req.files?.foto ? req.files.foto[0].filename : null;

  const kk = req.files?.kk ? req.files.kk[0].filename : null;

  const akta = req.files?.akta ? req.files.akta[0].filename : null;

  const sql = `
  INSERT INTO ppdb
  (
    user_id,
    nik,
    nisn,
    nama_lengkap,
    tempat_lahir,
    tanggal_lahir,
    jenis_kelamin,
    alamat,
    sekolah_asal,
    no_telp,
    nama_ayah,
    pekerjaan_ayah,
    nama_ibu,
    pekerjaan_ibu,
    telp_ortu,
    foto,
    kk,
    akta
  )
  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
  `;

  db.query(
    sql,
    [
      user_id,
      nik,
      nisn,
      nama_lengkap,
      tempat_lahir,
      tanggal_lahir,
      jenis_kelamin,
      alamat,
      sekolah_asal,
      no_telp,
      nama_ayah,
      pekerjaan_ayah,
      nama_ibu,
      pekerjaan_ibu,
      telp_ortu,
      foto,
      kk,
      akta,
    ],
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: "Pendaftaran berhasil",
      });
    },
  );
};

const getPPDBUser = (req, res) => {
  const { user_id } = req.params;

  db.query("SELECT * FROM ppdb WHERE user_id=?", [user_id], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
};

const getSemuaPPDB = (req, res) => {
  db.query("SELECT * FROM ppdb ORDER BY id DESC", (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
};

const updateStatus = (req, res) => {
  const { id } = req.params;

  const { status } = req.body;

  db.query("UPDATE ppdb SET status=? WHERE id=?", [status, id], (err) => {
    if (err) return res.status(500).json(err);

    res.json({
      message: "Status berhasil diperbarui",
    });
  });
};

module.exports = {
  daftarPPDB,
  getPPDBUser,
  getSemuaPPDB,
  updateStatus,
};
