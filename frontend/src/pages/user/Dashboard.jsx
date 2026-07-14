import UserLayout from "../../layouts/UserLayout";

function Dashboard() {
  return (
    <UserLayout>
      <div className="container-fluid">
        <h2 className="mb-4">Dashboard PPDB</h2>

        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card shadow border-0">
              <div className="card-body">
                <h5>Status Pendaftaran</h5>

                <h3 className="text-warning">Belum Lengkap</h3>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow border-0">
              <div className="card-body">
                <h5>Progress Data</h5>

                <h3 className="text-primary">0%</h3>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow border-0">
              <div className="card-body">
                <h5>Status Seleksi</h5>

                <h3 className="text-secondary">Menunggu</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="card shadow border-0">
          <div className="card-body">
            <h4>Selamat Datang</h4>

            <p>
              Selamat datang di Sistem PPDB Online Pondok Full Day Sunan Ampel.
              Silakan melengkapi data pendaftaran Anda melalui menu Pendaftaran.
            </p>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}

export default Dashboard;
