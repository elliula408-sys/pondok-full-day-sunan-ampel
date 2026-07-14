import { useEffect, useState } from "react";

import api from "../../services/api";

import AdminLayout from "../../layouts/AdminLayout";

function DashboardAdmin() {
  const [statistik, setStatistik] = useState({});

  useEffect(() => {
    getStatistik();
  }, []);

  const getStatistik = async () => {
    const res = await api.get("/dashboard/statistik");

    setStatistik(res.data);
  };

  return (
    <AdminLayout>
      <h2>Dashboard Admin</h2>

      <div className="row mt-4">
        <div className="col-md-3">
          <div className="dashboard-card">
            <h5>Total Berita</h5>

            <h2>{statistik.total_berita}</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="dashboard-card">
            <h5>Total Galeri</h5>

            <h2>{statistik.total_galeri}</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="dashboard-card">
            <h5>Total PPDB</h5>

            <h2>{statistik.total_ppdb}</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="dashboard-card">
            <h5>Diterima</h5>

            <h2>{statistik.total_diterima}</h2>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default DashboardAdmin;
