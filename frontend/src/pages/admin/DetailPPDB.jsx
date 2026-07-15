import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import AdminLayout from "../../layouts/AdminLayout";
import api from "../../services/api";

function DetailPPDB() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    try {
      const res = await api.get(`/ppdb/${id}`);

      setData(res.data);
    } catch (err) {
      console.log(err);

      setError("Data tidak ditemukan");
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (status) => {
    try {
      await api.put(`/ppdb/status/${id}`, {
        status,
      });

      alert(`Status berhasil diubah menjadi ${status}`);

      getDetail();
    } catch (error) {
      console.log(error);

      alert("Gagal mengubah status");
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <h4>Loading...</h4>
      </AdminLayout>
    );
  }

  if (error) {
    return (
      <AdminLayout>
        <div className="alert alert-danger">{error}</div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Detail Pendaftaran PPDB</h2>

        <button
          className="btn btn-secondary"
          onClick={() => navigate("/admin/ppdb")}
        >
          Kembali
        </button>
      </div>

      {/* STATUS */}

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5>Status Pendaftaran</h5>

          {data.status === "Diterima" ? (
            <span className="badge bg-success fs-6">Diterima</span>
          ) : data.status === "Ditolak" ? (
            <span className="badge bg-danger fs-6">Ditolak</span>
          ) : (
            <span className="badge bg-warning text-dark fs-6">
              Menunggu Verifikasi
            </span>
          )}
        </div>
      </div>

      {/* DATA SANTRI */}

      <div className="card shadow-sm mb-4">
        <div className="card-header bg-primary text-white">
          Data Calon Santri
        </div>

        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p>
                <strong>NIK :</strong> {data.nik}
              </p>

              <p>
                <strong>NISN :</strong> {data.nisn}
              </p>

              <p>
                <strong>Nama :</strong> {data.nama_lengkap}
              </p>

              <p>
                <strong>Tempat Lahir :</strong> {data.tempat_lahir}
              </p>

              <p>
                <strong>Tanggal Lahir :</strong>{" "}
                {new Date(data.tanggal_lahir).toLocaleDateString("id-ID")}
              </p>
            </div>

            <div className="col-md-6">
              <p>
                <strong>Jenis Kelamin :</strong> {data.jenis_kelamin}
              </p>

              <p>
                <strong>Sekolah Asal :</strong> {data.sekolah_asal}
              </p>

              <p>
                <strong>No HP :</strong> {data.no_telp}
              </p>

              <p>
                <strong>Alamat :</strong>
              </p>

              <p>{data.alamat}</p>
            </div>
          </div>
        </div>
      </div>

      {/* DATA ORANG TUA */}

      <div className="card shadow-sm mb-4">
        <div className="card-header bg-success text-white">Data Orang Tua</div>

        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p>
                <strong>Nama Ayah :</strong> {data.nama_ayah}
              </p>

              <p>
                <strong>Pekerjaan Ayah :</strong> {data.pekerjaan_ayah}
              </p>
            </div>

            <div className="col-md-6">
              <p>
                <strong>Nama Ibu :</strong> {data.nama_ibu}
              </p>

              <p>
                <strong>Pekerjaan Ibu :</strong> {data.pekerjaan_ibu}
              </p>

              <p>
                <strong>No HP Orang Tua :</strong> {data.telp_ortu}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* DOKUMEN */}

      <div className="card shadow-sm mb-4">
        <div className="card-header bg-dark text-white">
          Dokumen Pendaftaran
        </div>

        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <h6>Foto Santri</h6>

              <img
                src={`http://localhost:5000/uploads/${data.foto}`}
                className="img-fluid rounded border"
                alt="Foto"
              />
            </div>

            <div className="col-md-4">
              <h6>Kartu Keluarga</h6>

              <img
                src={`http://localhost:5000/uploads/${data.kk}`}
                className="img-fluid rounded border"
                alt="KK"
              />
            </div>

            <div className="col-md-4">
              <h6>Akta Kelahiran</h6>

              <img
                src={`http://localhost:5000/uploads/${data.akta}`}
                className="img-fluid rounded border"
                alt="Akta"
              />
            </div>
          </div>
        </div>
      </div>

      {/* AKSI */}

      <div className="card shadow-sm">
        <div className="card-body">
          <button
            className="btn btn-success me-2"
            onClick={() => updateStatus("Diterima")}
          >
            Terima
          </button>

          <button
            className="btn btn-danger me-2"
            onClick={() => updateStatus("Ditolak")}
          >
            Tolak
          </button>

          <button
            className="btn btn-warning"
            onClick={() => navigate(`/admin/ppdb/edit/${data.id}`)}
          >
            Edit Data
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}

export default DetailPPDB;
