import { useEffect, useState } from "react";
import api from "../../services/api";
import AdminLayout from "../../layouts/AdminLayout";

function KelolaPPDB() {
  const [data, setData] = useState([]);

  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    getPPDB();
  }, []);

  const filteredData = data.filter(
    (item) =>
      item.nama_lengkap?.toLowerCase().includes(keyword.toLowerCase()) ||
      item.nik?.includes(keyword) ||
      item.nisn?.includes(keyword),
  );

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

  const hapusData = async (id) => {
    const konfirmasi = window.confirm("Yakin ingin menghapus data ini?");

    if (!konfirmasi) return;

    try {
      await api.delete(`/ppdb/${id}`);

      alert("Data berhasil dihapus");

      getPPDB();
    } catch (error) {
      console.error(error);

      alert("Gagal menghapus data");
    }
  };

  return (
    <AdminLayout>
      <h2 className="mb-4">Kelola Data PPDB</h2>

      <div className="card mb-3">
        <div className="card-body">
          <input
            type="text"
            className="form-control"
            placeholder="Cari Nama, NIK atau NISN..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
      </div>

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
                  <th width="320">Aksi</th>
                </tr>
              </thead>

              <tbody>
                {data.length > 0 ? (
                  filteredData.map((item, index) => (
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
                        <div className="d-flex mb-2">
                          <button
                            className="btn btn-info btn-sm me-2"
                            onClick={() =>
                              (window.location.href = `/admin/ppdb/${item.id}`)
                            }
                          >
                            Detail
                          </button>

                          <button
                            className="btn btn-warning btn-sm"
                            onClick={() =>
                              (window.location.href = `/admin/ppdb/edit/${item.id}`)
                            }
                          >
                            Edit
                          </button>
                        </div>

                        <div className="d-flex">
                          <button
                            className="btn btn-success btn-sm me-2"
                            onClick={() => updateStatus(item.id, "Diterima")}
                          >
                            Terima
                          </button>

                          <button
                            className="btn btn-danger btn-sm me-2"
                            onClick={() => updateStatus(item.id, "Ditolak")}
                          >
                            Tolak
                          </button>

                          <button
                            className="btn btn-dark btn-sm"
                            onClick={() => hapusData(item.id)}
                          >
                            Hapus
                          </button>
                        </div>
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
