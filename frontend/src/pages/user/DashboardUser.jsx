import { useEffect, useState } from "react";

import api from "../../services/api";

import { getUser } from "../../utils/auth";

import UserLayout from "../../layouts/UserLayout";

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
    <UserLayout>
      <div className="container-fluid">
        <h2 className="mb-4">Dashboard PPDB</h2>

        {!ppdb ? (
          <div className="alert alert-warning">
            Anda belum melakukan pendaftaran PPDB.
          </div>
        ) : (
          <>
            <div className="row">
              <div className="col-md-4">
                <div className="card shadow border-0 mb-4">
                  <div className="card-body">
                    <h5>Status Pendaftaran</h5>

                    <h3 className="text-primary">Sudah Mengisi</h3>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow border-0 mb-4">
                  <div className="card-body">
                    <h5>Status Seleksi</h5>

                    <h3 className="text-success">{ppdb.status}</h3>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow border-0 mb-4">
                  <div className="card-body">
                    <h5>NISN</h5>

                    <h3>{ppdb.nisn}</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="card shadow border-0">
              <div className="card-body">
                <h4 className="mb-3">Data Pendaftar</h4>

                <p>
                  <strong>Nama :</strong> {ppdb.nama_lengkap}
                </p>

                <p>
                  <strong>NIK :</strong> {ppdb.nik}
                </p>

                <p>
                  <strong>Sekolah Asal :</strong> {ppdb.sekolah_asal}
                </p>

                <p>
                  <strong>No Telp :</strong> {ppdb.no_telp}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </UserLayout>
  );
}

export default DashboardUser;
