function DashboardAdmin() {
  return (
    <>
      <h2>Dashboard Admin</h2>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card shadow p-3">
            <h5>Total Pendaftar</h5>
            <h2>0</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-3">
            <h5>Total Berita</h5>
            <h2>0</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-3">
            <h5>Total Galeri</h5>
            <h2>0</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardAdmin;
