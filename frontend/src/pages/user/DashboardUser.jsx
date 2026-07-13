import { useEffect, useState } from "react";

import api from "../../services/api";

import { getUser } from "../../utils/auth";

function DashboardUser() {
  const [ppdb, setPPDB] = useState(null);

  const user = getUser();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await api.get(`/ppdb/user/${user.id}`);

      if (res.data.length > 0) {
        setPPDB(res.data[0]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Dashboard PPDB</h2>

      {!ppdb ? (
        <div className="alert alert-warning">
          Anda belum melakukan pendaftaran.
        </div>
      ) : (
        <div className="card p-4">
          <h4>{ppdb.nama_lengkap}</h4>

          <p>NIK :{ppdb.nik}</p>

          <p>Sekolah :{ppdb.sekolah_asal}</p>

          <p>
            Status :<strong>{ppdb.status}</strong>
          </p>
        </div>
      )}
    </div>
  );
}

export default DashboardUser;
