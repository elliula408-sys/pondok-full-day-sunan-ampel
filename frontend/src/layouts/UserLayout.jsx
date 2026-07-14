import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaClipboardList,
  FaInfoCircle,
  FaSignOutAlt,
  FaUserGraduate,
} from "react-icons/fa";

import { getUser } from "../utils/auth";

import logo from "../assets/images/logo.png";

function UserLayout({ children }) {
  const location = useLocation();

  const user = getUser();

  const logout = () => {
    const konfirmasi = window.confirm("Yakin ingin logout?");

    if (!konfirmasi) return;

    localStorage.removeItem("token");

    window.location.href = "/";
  };

  return (
    <div className="d-flex">
      {/* SIDEBAR */}

      <div
        className="text-white"
        style={{
          width: "270px",
          minHeight: "100vh",
          background: "linear-gradient(180deg,#198754,#0d6efd)",
        }}
      >
        <div className="text-center p-4">
          <img src={logo} alt="Logo" width="90" className="mb-3" />

          <h5 className="fw-bold">PPDB Online</h5>

          <small>Pondok Full Day Sunan Ampel</small>
        </div>

        <hr />

        <div className="px-3">
          <Link
            to="/dashboard"
            className={`d-block p-3 rounded mb-2 text-decoration-none ${
              location.pathname === "/dashboard"
                ? "bg-light text-success"
                : "text-white"
            }`}
          >
            <FaHome className="me-2" />
            Dashboard
          </Link>

          <Link
            to="/pendaftaran"
            className={`d-block p-3 rounded mb-2 text-decoration-none ${
              location.pathname === "/pendaftaran"
                ? "bg-light text-success"
                : "text-white"
            }`}
          >
            <FaClipboardList className="me-2" />
            Pendaftaran
          </Link>

          <Link
            to="/user"
            className={`d-block p-3 rounded mb-2 text-decoration-none ${
              location.pathname === "/user"
                ? "bg-light text-success"
                : "text-white"
            }`}
          >
            <FaUserGraduate className="me-2" />
            Data Saya
          </Link>

          <Link
            to="/informasi"
            className={`d-block p-3 rounded mb-2 text-decoration-none ${
              location.pathname === "/informasi"
                ? "bg-light text-success"
                : "text-white"
            }`}
          >
            <FaInfoCircle className="me-2" />
            Informasi PPDB
          </Link>
        </div>

        <div className="p-3 mt-5">
          <button className="btn btn-danger w-100" onClick={logout}>
            <FaSignOutAlt className="me-2" />
            Logout
          </button>
        </div>
      </div>

      {/* CONTENT */}

      <div
        style={{
          flex: 1,
          background: "#f8f9fa",
          minHeight: "100vh",
        }}
      >
        {/* TOPBAR */}

        <div className="bg-white shadow-sm px-4 py-3 d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Sistem PPDB Online</h5>

          <div className="d-flex align-items-center">
            <FaUserGraduate size={30} className="me-2 text-success" />

            <div>
              <strong>{user?.username}</strong>

              <br />

              <small>Calon Santri</small>
            </div>
          </div>
        </div>

        {/* ISI HALAMAN */}

        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

export default UserLayout;
