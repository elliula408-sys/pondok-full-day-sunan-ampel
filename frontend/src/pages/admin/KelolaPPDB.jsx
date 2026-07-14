import { useEffect, useState } from "react";
import api from "../../services/api";
import AdminLayout from "../../layouts/AdminLayout";

function KelolaPPDB() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPPDB();
  }, []);

  const getPPDB = async () => {
    try {
      const res = await api.get("/ppdb");

      setData(res.data);
    } catch (error) {
      console.error(error);
      alert("Gagal mengambil data PPDB");
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/ppdb/status/${id}`, {
        status,
      });

      alert(`Status berhasil diubah menjadi ${status}`);

      getPPDB();
    } catch (error) {
      console.error(error);
      alert("Gagal mengubah status");
    }
  };

  return (
    <AdminLayout>
      <h2 className="mb-4">Kelola Data PPDB</h2>

      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          Daftar Pendaftar PPDB
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>No</th>
                  <th>NIK</th>
                  <th>Nama</th>
                  <th>NISN</th>
                  <th>Sekolah Asal</th>
                  <th>No HP</th>
                  <th>Status</th>
                  <th width="180">Aksi</th>
                </tr>
              </thead>

              <tbody>
                {data.length > 0 ? (
                  data.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>

                      <td>{item.nik}</td>

                      <td>{item.nama_lengkap}</td>

                      <td>{item.nisn}</td>

                      <td>{item.sekolah_asal}</td>

                      <td>{item.no_telp}</td>

                      <td>
                        {item.status === "Diterima" ? (
                          <span className="badge bg-success">Diterima</span>
                        ) : item.status === "Ditolak" ? (
                          <span className="badge bg-danger">Ditolak</span>
                        ) : (
                          <span className="badge bg-warning text-dark">
                            Menunggu
                          </span>
                        )}
                      </td>

                      <td>
                        <button
                          className="btn btn-success btn-sm me-2"
                          onClick={() => updateStatus(item.id, "Diterima")}
                        >
                          Terima
                        </button>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => updateStatus(item.id, "Ditolak")}
                        >
                          Tolak
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center">
                      Belum ada data PPDB
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default KelolaPPDB;
