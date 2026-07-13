import { useState } from "react";
import api from "../../services/api";
import { getUser } from "../../utils/auth";

function Pendaftaran() {
  const [form, setForm] = useState({
    nik: "",
    nisn: "",
    nama_lengkap: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    jenis_kelamin: "",
    alamat: "",
    sekolah_asal: "",
    no_telp: "",
    nama_ayah: "",
    pekerjaan_ayah: "",
    nama_ibu: "",
    pekerjaan_ibu: "",
    telp_ortu: "",
  });

  const [foto, setFoto] = useState(null);
  const [kk, setKk] = useState(null);
  const [akta, setAkta] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = getUser();

    try {
      const formData = new FormData();

      Object.keys(form).forEach((key) => {
        formData.append(key, form[key]);
      });

      formData.append("user_id", user.id);

      if (foto) formData.append("foto", foto);

      if (kk) formData.append("kk", kk);

      if (akta) formData.append("akta", akta);

      const res = await api.post("/ppdb", formData);

      alert(res.data.message);
    } catch (error) {
      console.log(error);

      alert("Pendaftaran gagal");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Form Pendaftaran PPDB</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>NIK</label>

          <input
            type="text"
            name="nik"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>NISN</label>

          <input
            type="text"
            name="nisn"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Nama Lengkap</label>

          <input
            type="text"
            name="nama_lengkap"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Tempat Lahir</label>

          <input
            type="text"
            name="tempat_lahir"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Tanggal Lahir</label>

          <input
            type="date"
            name="tanggal_lahir"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Jenis Kelamin</label>

          <select
            name="jenis_kelamin"
            className="form-control"
            onChange={handleChange}
          >
            <option value="">Pilih</option>

            <option value="L">Laki-Laki</option>

            <option value="P">Perempuan</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Alamat</label>

          <textarea
            name="alamat"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Sekolah Asal</label>

          <input
            type="text"
            name="sekolah_asal"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>No Telp</label>

          <input
            type="text"
            name="no_telp"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <hr />

        <h4>Data Ayah</h4>

        <div className="mb-3">
          <label>Nama Ayah</label>

          <input
            type="text"
            name="nama_ayah"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Pekerjaan Ayah</label>

          <input
            type="text"
            name="pekerjaan_ayah"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <hr />

        <h4>Data Ibu</h4>

        <div className="mb-3">
          <label>Nama Ibu</label>

          <input
            type="text"
            name="nama_ibu"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Pekerjaan Ibu</label>

          <input
            type="text"
            name="pekerjaan_ibu"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>No HP Orang Tua</label>

          <input
            type="text"
            name="telp_ortu"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <hr />

        <h4>Upload Dokumen</h4>

        <div className="mb-3">
          <label>Foto Santri</label>

          <input
            type="file"
            className="form-control"
            onChange={(e) => setFoto(e.target.files[0])}
          />
        </div>

        <div className="mb-3">
          <label>Kartu Keluarga</label>

          <input
            type="file"
            className="form-control"
            onChange={(e) => setKk(e.target.files[0])}
          />
        </div>

        <div className="mb-3">
          <label>Akta Kelahiran</label>

          <input
            type="file"
            className="form-control"
            onChange={(e) => setAkta(e.target.files[0])}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Simpan Pendaftaran
        </button>
      </form>
    </div>
  );
}

export default Pendaftaran;
