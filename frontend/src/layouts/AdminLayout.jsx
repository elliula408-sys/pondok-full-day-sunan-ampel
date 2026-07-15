import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

import {
  FaHome,
  FaNewspaper,
  FaImages,
  FaUsers,
  FaRegAddressCard,
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
        <div className="text-center mb-4">
          <img src={logo} alt="logo" width="80" />

          <h5 className="mt-3">Admin Pondok</h5>

          <small>Pondok Full Day Sunan Ampel</small>
        </div>

        <hr />

        <Link className="d-block text-white mb-3" to="/admin">
          <FaHome className="me-2" /> Dashboard
        </Link>

        <Link className="d-block text-white mb-3" to="/admin/users">
          <FaRegAddressCard className="me-2" />
          Akun User
        </Link>

        <Link className="d-block text-white mb-3" to="/admin/ppdb">
          <FaUsers className="me-2" />
          Kelola PPDB
        </Link>

        <Link className="d-block text-white mb-3" to="/admin/berita">
          <FaNewspaper className="me-2" />
          Kelola Berita
        </Link>

        <Link className="d-block text-white mb-3" to="/admin/galeri">
          <FaImages className="me-2" />
          Kelola Galeri
        </Link>

        <button
          className="btn btn-danger w-100 mt-4"
          onClick={() => {
            const yakin = window.confirm("Yakin ingin logout?");

            if (!yakin) return;

            localStorage.removeItem("adminToken");

            window.location.href = "/admin/login";
          }}
        >
          <FaSignOutAlt className="me-2" />
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
