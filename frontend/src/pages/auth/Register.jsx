import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaUserPlus } from "react-icons/fa";

import api from "../../services/api";

import logo from "../../assets/images/logo.png";

function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await api.post("/auth/register", form);

      alert(res.data.message || "Registrasi berhasil");

      window.location.href = "/login";
    } catch (error) {
      alert(error.response?.data?.message || "Registrasi gagal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#198754,#0d6efd)",
      }}
    >
      <div
        className="card shadow-lg border-0"
        style={{
          width: "500px",
          borderRadius: "20px",
        }}
      >
        <div className="card-body p-5">
          <div className="text-center mb-4">
            <img src={logo} alt="Logo Pondok" width="90" />

            <h2 className="fw-bold text-success mt-3">Register PPDB</h2>

            <p className="text-muted">Pondok Full Day Sunan Ampel</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* USERNAME */}

            <div className="mb-3">
              <label className="form-label">Username</label>

              <div className="input-group">
                <span className="input-group-text">
                  <FaUser />
                </span>

                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Masukkan Username"
                  value={form.username}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* EMAIL */}

            <div className="mb-3">
              <label className="form-label">Email</label>

              <div className="input-group">
                <span className="input-group-text">
                  <FaEnvelope />
                </span>

                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Masukkan Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* PASSWORD */}

            <div className="mb-4">
              <label className="form-label">Password</label>

              <div className="input-group">
                <span className="input-group-text">
                  <FaLock />
                </span>

                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Masukkan Password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-success w-100"
              disabled={loading}
            >
              {loading ? (
                "Memproses..."
              ) : (
                <>
                  <FaUserPlus className="me-2" />
                  Register
                </>
              )}
            </button>
          </form>

          <div className="text-center mt-4">
            <p>Sudah punya akun?</p>

            <Link to="/login" className="btn btn-outline-success">
              Login Sekarang
            </Link>
          </div>

          <div className="text-center mt-3">
            <Link to="/" className="text-decoration-none">
              ← Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
