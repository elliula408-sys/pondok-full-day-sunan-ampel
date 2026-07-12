import { useEffect, useState } from "react";
import api from "../../services/api";

function KelolaBerita() {
  const [berita, setBerita] = useState([]);

  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  // Ambil semua berita
  const getBerita = async () => {
    try {
      const res = await api.get("/berita");
      setBerita(res.data);
    } catch (error) {
      console.error(error);
      alert("Gagal mengambil data berita");
    }
  };

  // Tambah berita
  const tambahBerita = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("judul", judul);
    formData.append("isi", isi);

    if (thumbnail) {
      formData.append("thumbnail", thumbnail);
    }

    try {
      await api.post("/berita", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Berita berhasil ditambahkan");

      setJudul("");
      setIsi("");
      setThumbnail(null);

      // Reset input file
      document.getElementById("thumbnail").value = "";

      getBerita();
    } catch (error) {
      console.error(error);
      alert("Gagal menambahkan berita");
    }
  };

  // Hapus berita
  const hapusBerita = async (id) => {
    const konfirmasi = window.confirm("Yakin ingin menghapus berita ini?");

    if (!konfirmasi) return;

    try {
      await api.delete(`/berita/${id}`);

      alert("Berita berhasil dihapus");

      getBerita();
    } catch (error) {
      console.error(error);
      alert("Gagal menghapus berita");
    }
  };

  useEffect(() => {
    getBerita();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Kelola Berita Pondok</h2>

      {/* FORM TAMBAH BERITA */}
      <div className="card mb-4">
        <div className="card-header bg-success text-white">Tambah Berita</div>

        <div className="card-body">
          <form onSubmit={tambahBerita}>
            <div className="mb-3">
              <label className="form-label">Judul Berita</label>

              <input
                type="text"
                className="form-control"
                placeholder="Masukkan Judul Berita"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Isi Berita</label>

              <textarea
                className="form-control"
                rows="6"
                placeholder="Masukkan Isi Berita"
                value={isi}
                onChange={(e) => setIsi(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Thumbnail</label>

              <input
                id="thumbnail"
                type="file"
                className="form-control"
                accept="image/*"
                onChange={(e) => setThumbnail(e.target.files[0])}
                required
              />
            </div>

            <button type="submit" className="btn btn-success">
              Simpan Berita
            </button>
          </form>
        </div>
      </div>

      {/* TABEL BERITA */}
      <div className="card">
        <div className="card-header bg-primary text-white">Daftar Berita</div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered table-striped align-middle">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Thumbnail</th>
                  <th>Judul</th>
                  <th>Tanggal</th>
                  <th width="120">Aksi</th>
                </tr>
              </thead>

              <tbody>
                {berita.length > 0 ? (
                  berita.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>

                      <td>
                        {item.thumbnail ? (
                          <img
                            src={`http://localhost:5000/uploads/${item.thumbnail}`}
                            alt={item.judul}
                            width="100"
                          />
                        ) : (
                          "-"
                        )}
                      </td>

                      <td>{item.judul}</td>

                      <td>
                        {new Date(item.created_at).toLocaleDateString("id-ID")}
                      </td>

                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => hapusBerita(item.id)}
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center">
                      Belum ada berita
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KelolaBerita;
