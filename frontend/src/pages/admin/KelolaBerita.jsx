import { useEffect, useState } from "react";
import api from "../../services/api";
import AdminLayout from "../../layouts/AdminLayout";

function KelolaBerita() {
  const [berita, setBerita] = useState([]);

  const [judul, setJudul] = useState("");
  const [slug, setSlug] = useState("");
  const [isi, setIsi] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  useEffect(() => {
    getBerita();
  }, []);

  // Generate slug otomatis
  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
  };

  const handleJudulChange = (e) => {
    const value = e.target.value;

    setJudul(value);
    setSlug(generateSlug(value));
  };

  const getBerita = async () => {
    try {
      const res = await api.get("/berita");
      setBerita(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const tambahBerita = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("judul", judul);
    formData.append("slug", slug);
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
      setSlug("");
      setIsi("");
      setThumbnail(null);

      document.getElementById("thumbnail").value = "";

      getBerita();
    } catch (error) {
      console.error(error);
      alert("Gagal menambahkan berita");
    }
  };

  const hapusBerita = async (id) => {
    if (!window.confirm("Yakin ingin menghapus berita ini?")) return;

    try {
      await api.delete(`/berita/${id}`);

      alert("Berita berhasil dihapus");

      getBerita();
    } catch (error) {
      console.error(error);
      alert("Gagal menghapus berita");
    }
  };

  return (
    <AdminLayout>
      <h2 className="mb-4">Kelola Berita Pondok</h2>

      {/* FORM TAMBAH */}
      <div className="card shadow-sm mb-4">
        <div className="card-header bg-success text-white">Tambah Berita</div>

        <div className="card-body">
          <form onSubmit={tambahBerita}>
            <div className="mb-3">
              <label className="form-label">Judul Berita</label>

              <input
                type="text"
                className="form-control"
                value={judul}
                onChange={handleJudulChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Slug</label>

              <input
                type="text"
                className="form-control"
                value={slug}
                readOnly
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Isi Berita</label>

              <textarea
                className="form-control"
                rows="6"
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

      {/* TABEL */}
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">Daftar Berita</div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Thumbnail</th>
                  <th>Judul</th>
                  <th>Slug</th>
                  <th>Tanggal</th>
                  <th>Aksi</th>
                </tr>
              </thead>

              <tbody>
                {berita.length > 0 ? (
                  berita.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>

                      <td>
                        {item.thumbnail && (
                          <img
                            src={`http://localhost:5000/uploads/${item.thumbnail}`}
                            alt={item.judul}
                            width="100"
                            className="rounded"
                          />
                        )}
                      </td>

                      <td>{item.judul}</td>

                      <td>
                        <small>{item.slug}</small>
                      </td>

                      <td>
                        {item.created_at
                          ? new Date(item.created_at).toLocaleDateString(
                              "id-ID",
                            )
                          : "-"}
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
                    <td colSpan="6" className="text-center">
                      Belum ada berita
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

export default KelolaBerita;
