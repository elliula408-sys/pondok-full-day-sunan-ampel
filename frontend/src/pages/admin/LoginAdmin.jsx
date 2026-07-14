import { useState } from "react";
import { FaUserShield, FaUser, FaLock } from "react-icons/fa";

function LoginAdmin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      localStorage.setItem("adminToken", "login");

      window.location.href = "/admin";
    } else {
      alert("Username atau Password salah");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #198754, #0d6efd)",
      }}
    >
      <div
        className="card shadow-lg border-0"
        style={{
          width: "450px",
          borderRadius: "20px",
        }}
      >
        <div className="card-body p-5">
          <div className="text-center mb-4">
            <FaUserShield size={70} className="text-success" />

            <h2 className="mt-3 fw-bold text-success">Login Admin</h2>

            <p className="text-muted">Pondok Full Day Sunan Ampel</p>
          </div>

          <form onSubmit={submitLogin}>
            <div className="mb-3">
              <label className="form-label">Username</label>

              <div className="input-group">
                <span className="input-group-text">
                  <FaUser />
                </span>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Masukkan Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label">Password</label>

              <div className="input-group">
                <span className="input-group-text">
                  <FaLock />
                </span>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Masukkan Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-success w-100">
              Login Admin
            </button>
          </form>

          <div className="text-center mt-4">
            <a href="/" className="text-decoration-none">
              ← Kembali ke Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginAdmin;
