import { Link } from "react-router-dom";

import { FaUser, FaUserPlus, FaLock } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold text-success" to="/">
          Pondok Full Day Sunan Ampel
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Beranda
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/profil">
                Profil
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/berita">
                Berita
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/galeri">
                Galeri
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/kontak">
                Kontak
              </Link>
            </li>

            <li className="nav-item">
              <Link className="btn btn-outline-success ms-2" to="/login">
                <FaUser /> Login
              </Link>
            </li>

            <li className="nav-item">
              <Link className="btn btn-success ms-2" to="/register">
                <FaUserPlus /> Register
              </Link>
            </li>

            <li className="nav-item">
              <Link className="btn btn-dark ms-2" to="/admin/login">
                <FaLock /> Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
