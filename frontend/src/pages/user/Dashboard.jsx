function Dashboard() {
  const logout = () => {
    localStorage.removeItem("token");

    window.location = "/";
  };

  return (
    <div className="container mt-5">
      <h2>Dashboard User</h2>

      <button className="btn btn-danger" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
