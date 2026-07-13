import { useEffect, useState } from "react";

import api from "../../services/api";

function KelolaPPDB() {
  const [data, setData] = useState([]);

  const getPPDB = async () => {
    const res = await api.get("/ppdb");

    setData(res.data);
  };

  useEffect(() => {
    getPPDB();
  }, []);

  const updateStatus = async (id, status) => {
    await api.put(`/ppdb/status/${id}`, {
      status,
    });

    getPPDB();
  };

  return (
    <div>
      <h2>Kelola PPDB</h2>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Sekolah</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.nama_lengkap}</td>

              <td>{item.sekolah_asal}</td>

              <td>{item.status}</td>

              <td>
                <button
                  className="btn btn-success me-2"
                  onClick={() => updateStatus(item.id, "Diterima")}
                >
                  Terima
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => updateStatus(item.id, "Ditolak")}
                >
                  Tolak
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default KelolaPPDB;
