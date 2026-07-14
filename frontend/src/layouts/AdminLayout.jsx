import { Link } from "react-router-dom";

import {
  FaHome,
  FaNewspaper,
  FaImages,
  FaUsers,
  FaSignOutAlt,
} from "react-icons/fa";

function AdminLayout({ children }) {
  return (
    <div className="d-flex">
      <div
        className="bg-success text-white p-3"
        style={{
          width: "250px",
          minHeight: "100vh",
        }}
      >
        <h4>Admin Pondok</h4>

        <hr />

        <Link className="d-block text-white mb-3" to="/admin">
          <>
            <FaHome /> Dashboard
          </>
        </Link>

        <Link className="d-block text-white mb-3" to="/admin/ppdb">
          <>
            <FaUsers /> PPDB
          </>
        </Link>

        <Link className="d-block text-white mb-3" to="/admin/berita">
          <>
            <FaNewspaper /> Berita
          </>
        </Link>

        <Link className="d-block text-white mb-3" to="/admin/galeri">
          <>
            <FaImages /> Galeri
          </>
        </Link>

        <button
          className="btn btn-danger w-100 mt-4"
          onClick={() => {
            localStorage.removeItem("adminToken");

            window.location.href = "/admin/login";
          }}
        >
          Logout
        </button>
      </div>

      <div
        className="p-4"
        style={{
          flex: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default AdminLayout;
