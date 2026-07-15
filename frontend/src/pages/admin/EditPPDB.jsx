import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import AdminLayout from "../../layouts/AdminLayout";
import api from "../../services/api";

function EditPPDB() {
  const { id } = useParams();

  const navigate = useNavigate();

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

    status: "Menunggu",
  });

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    const res = await api.get(`/ppdb/${id}`);

    setForm(res.data);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const simpan = async (e) => {
    e.preventDefault();

    await api.put(`/ppdb/${id}`, form);

    alert("Data berhasil diperbarui");

    navigate("/admin/ppdb");
  };

  return (
    <AdminLayout>
      <h2>Edit Data PPDB</h2>

      <form onSubmit={simpan}>
        {/* DATA SANTRI */}

        <div className="card shadow-sm mb-4">
          <div className="card-header bg-primary text-white">
            Data Calon Santri
          </div>

          <div className="card-body">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>NIK</label>

                <input
                  type="text"
                  className="form-control"
                  name="nik"
                  value={form.nik}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>NISN</label>

                <input
                  type="text"
                  className="form-control"
                  name="nisn"
                  value={form.nisn}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-12 mb-3">
                <label>Nama Lengkap</label>

                <input
                  type="text"
                  className="form-control"
                  name="nama_lengkap"
                  value={form.nama_lengkap}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Tempat Lahir</label>

                <input
                  type="text"
                  className="form-control"
                  name="tempat_lahir"
                  value={form.tempat_lahir}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Tanggal Lahir</label>

                <input
                  type="date"
                  className="form-control"
                  name="tanggal_lahir"
                  value={form.tanggal_lahir}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Jenis Kelamin</label>

                <select
                  className="form-control"
                  name="jenis_kelamin"
                  value={form.jenis_kelamin}
                  onChange={handleChange}
                >
                  <option value="">Pilih</option>
                  <option value="L">Laki-Laki</option>
                  <option value="P">Perempuan</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label>No HP</label>

                <input
                  type="text"
                  className="form-control"
                  name="no_telp"
                  value={form.no_telp}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-12 mb-3">
                <label>Sekolah Asal</label>

                <input
                  type="text"
                  className="form-control"
                  name="sekolah_asal"
                  value={form.sekolah_asal}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-12">
                <label>Alamat</label>

                <textarea
                  rows="4"
                  className="form-control"
                  name="alamat"
                  value={form.alamat}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/* DATA ORANG TUA */}

        <div className="card shadow-sm mb-4">
          <div className="card-header bg-success text-white">
            Data Orang Tua
          </div>

          <div className="card-body">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Nama Ayah</label>

                <input
                  type="text"
                  className="form-control"
                  name="nama_ayah"
                  value={form.nama_ayah}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Pekerjaan Ayah</label>

                <input
                  type="text"
                  className="form-control"
                  name="pekerjaan_ayah"
                  value={form.pekerjaan_ayah}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Nama Ibu</label>

                <input
                  type="text"
                  className="form-control"
                  name="nama_ibu"
                  value={form.nama_ibu}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Pekerjaan Ibu</label>

                <input
                  type="text"
                  className="form-control"
                  name="pekerjaan_ibu"
                  value={form.pekerjaan_ibu}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-12">
                <label>No HP Orang Tua</label>

                <input
                  type="text"
                  className="form-control"
                  name="telp_ortu"
                  value={form.telp_ortu}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/* STATUS */}

        <div className="card shadow-sm mb-4">
          <div className="card-header bg-warning">Status Pendaftaran</div>

          <div className="card-body">
            <select
              className="form-control"
              name="status"
              value={form.status}
              onChange={handleChange}
            >
              <option value="Menunggu">Menunggu Verifikasi</option>

              <option value="Diterima">Diterima</option>

              <option value="Ditolak">Ditolak</option>
            </select>
          </div>
        </div>

        {/* TOMBOL */}

        <div className="card shadow-sm">
          <div className="card-body">
            <button type="submit" className="btn btn-success me-2">
              Simpan Perubahan
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate("/admin/ppdb")}
            >
              Kembali
            </button>
          </div>
        </div>
      </form>
    </AdminLayout>
  );
}

export default EditPPDB;
