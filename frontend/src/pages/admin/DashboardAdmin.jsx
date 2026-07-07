function DashboardAdmin() {
  return (
    <div className="container mt-5">
      <h1>Dashboard Admin</h1>

      <div className="row">
        <div className="col-md-4">
          <div className="card p-3">Total Pendaftar</div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">Total Berita</div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">Total Galeri</div>
        </div>
      </div>
    </div>
  );
}

export default DashboardAdmin;
