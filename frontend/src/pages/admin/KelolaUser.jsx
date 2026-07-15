import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import api from "../../services/api";

function KelolaUser() {
  const [users, setUsers] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const res = await api.get("/users");

      setUsers(res.data);
    } catch (error) {
      console.log(error);

      alert("Gagal mengambil data user");
    }
  };

  const filteredUsers = users.filter(
    (item) =>
      item.username?.toLowerCase().includes(keyword.toLowerCase()) ||
      item.email?.toLowerCase().includes(keyword.toLowerCase()),
  );

  const totalUser = users.length;

  const sudahDaftar = users.filter((item) => item.sudah_daftar > 0).length;

  const belumDaftar = users.filter((item) => item.sudah_daftar === 0).length;

  return (
    <AdminLayout>
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Kelola Akun User</h2>

          <small className="text-muted">Data seluruh akun pendaftar PPDB</small>
        </div>

        <button className="btn btn-success" onClick={getUsers}>
          Refresh Data
        </button>
      </div>

      {/* STATISTIK */}
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h6>Total User</h6>

              <h3 className="text-primary">{totalUser}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h6>Sudah Registrasi</h6>

              <h3 className="text-success">{sudahDaftar}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h6>Belum Registrasi</h6>

              <h3 className="text-danger">{belumDaftar}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* PENCARIAN */}
      <div className="card mb-3 shadow-sm">
        <div className="card-body">
          <input
            type="text"
            className="form-control"
            placeholder="Cari Username atau Email..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
      </div>

      {/* TABEL */}
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">Data Akun User</div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th width="60">No</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Tanggal Daftar</th>
                  <th width="180">Status PPDB</th>
                </tr>
              </thead>

              <tbody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>

                      <td>
                        <strong>{item.username}</strong>
                      </td>

                      <td>{item.email}</td>

                      <td>
                        {item.created_at
                          ? new Date(item.created_at).toLocaleDateString(
                              "id-ID",
                            )
                          : "-"}
                      </td>

                      <td>
                        {item.sudah_daftar > 0 ? (
                          <span className="badge bg-success">
                            Sudah Registrasi
                          </span>
                        ) : (
                          <span className="badge bg-danger">
                            Belum Registrasi
                          </span>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center">
                      Data user tidak ditemukan
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default KelolaUser;
