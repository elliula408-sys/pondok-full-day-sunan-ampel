import { useEffect, useState } from "react";
import api from "../../services/api";
import AdminLayout from "../../layouts/AdminLayout";

function KelolaGaleri() {
  const [galeri, setGaleri] = useState([]);

  const [namaAcara, setNamaAcara] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [foto, setFoto] = useState(null);

  useEffect(() => {
    getGaleri();
  }, []);

  const getGaleri = async () => {
    try {
      const res = await api.get("/galeri");

      setGaleri(res.data);
    } catch (error) {
      console.error(error);
      alert("Gagal mengambil data galeri");
    }
  };

  const tambahGaleri = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("nama_acara", namaAcara);

      formData.append("deskripsi", deskripsi);

      formData.append("tanggal", tanggal);

      if (foto) {
        formData.append("foto", foto);
      }

      await api.post("/galeri", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Galeri berhasil ditambahkan");

      setNamaAcara("");
      setDeskripsi("");
      setTanggal("");
      setFoto(null);

      document.getElementById("foto").value = "";

      getGaleri();
    } catch (error) {
      console.error(error);
      alert("Gagal menambahkan galeri");
    }
  };

  const hapusGaleri = async (id) => {
    const konfirmasi = window.confirm("Yakin ingin menghapus galeri?");

    if (!konfirmasi) return;

    try {
      await api.delete(`/galeri/${id}`);

      alert("Galeri berhasil dihapus");

      getGaleri();
    } catch (error) {
      console.error(error);
      alert("Gagal menghapus galeri");
    }
  };

  return (
    <AdminLayout>
      <h2 className="mb-4">Kelola Galeri Pondok</h2>

      {/* FORM TAMBAH */}

      <div className="card shadow-sm mb-4">
        <div className="card-header bg-success text-white">Tambah Galeri</div>

        <div className="card-body">
          <form onSubmit={tambahGaleri}>
            <div className="mb-3">
              <label className="form-label">Nama Acara</label>

              <input
                type="text"
                className="form-control"
                value={namaAcara}
                onChange={(e) => setNamaAcara(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Deskripsi</label>

              <textarea
                className="form-control"
                rows="4"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Tanggal Kegiatan</label>

              <input
                type="date"
                className="form-control"
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Foto</label>

              <input
                id="foto"
                type="file"
                className="form-control"
                accept="image/*"
                onChange={(e) => setFoto(e.target.files[0])}
                required
              />
            </div>

            <button type="submit" className="btn btn-success">
              Simpan Galeri
            </button>
          </form>
        </div>
      </div>

      {/* DATA GALERI */}

      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">Daftar Galeri</div>

        <div className="card-body">
          <div className="row">
            {galeri.length > 0 ? (
              galeri.map((item) => (
                <div className="col-md-4 mb-4" key={item.id}>
                  <div className="card h-100">
                    <img
                      src={`http://localhost:5000/uploads/${item.foto}`}
                      alt={item.nama_acara}
                      className="card-img-top"
                      style={{
                        height: "220px",
                        objectFit: "cover",
                      }}
                    />

                    <div className="card-body">
                      <h5>{item.nama_acara}</h5>

                      <p>{item.deskripsi}</p>

                      <small className="text-muted">
                        {item.tanggal
                          ? new Date(item.tanggal).toLocaleDateString("id-ID")
                          : "-"}
                      </small>
                    </div>

                    <div className="card-footer">
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => hapusGaleri(item.id)}
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center">Belum ada galeri</div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default KelolaGaleri;
