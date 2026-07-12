import { Link, Outlet } from "react-router-dom";

function AdminLayout() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="d-flex">
      <div
        style={{
          width: "250px",
          minHeight: "100vh",
          background: "#198754",
          color: "white",
        }}
      >
        <div className="p-3">
          <h4>Pondok Admin</h4>
        </div>

        <ul className="list-group list-group-flush">
          <Link to="/admin" className="list-group-item">
            Dashboard
          </Link>

          <Link to="/admin/ppdb" className="list-group-item">
            Kelola PPDB
          </Link>

          <Link to="/admin/berita" className="list-group-item">
            Kelola Berita
          </Link>

          <Link to="/admin/galeri" className="list-group-item">
            Kelola Galeri
          </Link>

          <button className="btn btn-danger m-3" onClick={logout}>
            Logout
          </button>
        </ul>
      </div>

      <div
        style={{
          flex: 1,
          padding: "20px",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
