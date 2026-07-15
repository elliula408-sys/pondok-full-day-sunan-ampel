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
      if (err) {
        console.error(err);
        return res.status(500).json({
          success: false,
          message: "Gagal menyimpan data PPDB",
          error: err.message,
        });
      }

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

const getDetailPPDB = (req, res) => {
  const { id } = req.params;

  db.query("SELECT * FROM ppdb WHERE id=?", [id], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (result.length === 0) {
      return res.status(404).json({
        message: "Data tidak ditemukan",
      });
    }

    res.json(result[0]);
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

const updatePPDB = (req, res) => {
  const { id } = req.params;

  const {
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
    status,
  } = req.body;

  const sql = `
  UPDATE ppdb SET
  nik=?,
  nisn=?,
  nama_lengkap=?,
  tempat_lahir=?,
  tanggal_lahir=?,
  jenis_kelamin=?,
  alamat=?,
  sekolah_asal=?,
  no_telp=?,
  nama_ayah=?,
  pekerjaan_ayah=?,
  nama_ibu=?,
  pekerjaan_ibu=?,
  telp_ortu=?,
  status=?
  WHERE id=?
  `;

  db.query(
    sql,
    [
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
      status,
      id,
    ],
    (err) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Data berhasil diperbarui",
      });
    },
  );
};

const hapusPPDB = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM ppdb WHERE id=?", [id], (err) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Data berhasil dihapus",
    });
  });
};

module.exports = {
  daftarPPDB,
  getPPDBUser,
  getSemuaPPDB,
  getDetailPPDB,
  updateStatus,
  updatePPDB,
  hapusPPDB,
};
