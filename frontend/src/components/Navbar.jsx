import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Pondok Full Day Sunan Ampel
        </Link>

        <div>
          <Link to="/login" className="btn btn-light me-2">
            Login
          </Link>

          <Link to="/register" className="btn btn-primary">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
