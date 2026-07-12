import { useEffect, useState } from "react";

import api from "../../services/api";

function KelolaGaleri() {
  const [galeri, setGaleri] = useState([]);

  const [namaAcara, setNamaAcara] = useState("");

  const [deskripsi, setDeskripsi] = useState("");

  const [tanggal, setTanggal] = useState("");

  const [foto, setFoto] = useState(null);

  const getGaleri = async () => {
    const res = await api.get("/galeri");

    setGaleri(res.data);
  };

  useEffect(() => {
    getGaleri();
  }, []);

  const tambahGaleri = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("nama_acara", namaAcara);

    formData.append("deskripsi", deskripsi);

    formData.append("tanggal", tanggal);

    formData.append("foto", foto);

    await api.post("/galeri", formData);

    getGaleri();

    alert("Galeri berhasil ditambahkan");
  };

  const hapusGaleri = async (id) => {
    if (!window.confirm("Hapus galeri?")) return;

    await api.delete(`/galeri/${id}`);

    getGaleri();
  };

  return (
    <div>
      <h2>Kelola Galeri</h2>

      <form onSubmit={tambahGaleri}>
        <input
          className="form-control mb-2"
          placeholder="Nama Acara"
          onChange={(e) => setNamaAcara(e.target.value)}
        />

        <textarea
          className="form-control mb-2"
          placeholder="Deskripsi"
          onChange={(e) => setDeskripsi(e.target.value)}
        />

        <input
          type="date"
          className="form-control mb-2"
          onChange={(e) => setTanggal(e.target.value)}
        />

        <input
          type="file"
          className="form-control mb-2"
          onChange={(e) => setFoto(e.target.files[0])}
        />

        <button className="btn btn-success">Simpan</button>
      </form>

      <hr />

      <div className="row">
        {galeri.map((item) => (
          <div className="col-md-3" key={item.id}>
            <div className="card">
              <img
                src={`http://localhost:5000/uploads/${item.foto}`}
                className="card-img-top"
              />

              <div className="card-body">
                <h5>{item.nama_acara}</h5>

                <button
                  className="btn btn-danger"
                  onClick={() => hapusGaleri(item.id)}
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KelolaGaleri;
