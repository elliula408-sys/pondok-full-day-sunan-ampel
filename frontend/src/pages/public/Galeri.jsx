import { useEffect, useState } from "react";

import api from "../../services/api";

import Navbar from "../../components/Navbar";

import Footer from "../../components/Footer";

function Galeri() {
  const [galeri, setGaleri] = useState([]);

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    getGaleri();
  }, []);

  const getGaleri = async () => {
    const res = await api.get("/galeri");

    setGaleri(res.data);
  };

  const groupedGaleri = galeri.reduce((groups, item) => {
    const acara = item.nama_acara;

    if (!groups[acara]) {
      groups[acara] = [];
    }

    groups[acara].push(item);

    return groups;
  }, {});

  return (
    <>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1>Galeri Pondok</h1>

          <p>Dokumentasi kegiatan Pondok Full Day Sunan Ampel</p>
        </div>
        {Object.keys(groupedGaleri).map((acara) => (
          <div key={acara} className="mb-5">
            <h3 className="mb-3 text-success">{acara}</h3>

            <div className="row">
              {groupedGaleri[acara].map((item) => (
                <div key={item.id} className="col-md-3 mb-4">
                  <div className="card">
                    <img
                      src={`http://localhost:5000/uploads/${item.foto}`}
                      className="card-img-top"
                      style={{
                        height: "220px",
                        objectFit: "cover",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        setSelectedImage(
                          `http://localhost:5000/uploads/${item.foto}`,
                        )
                      }
                    />

                    <div className="card-body">
                      <p className="mb-0">{item.deskripsi}</p>

                      <small className="text-muted">
                        {new Date(item.tanggal).toLocaleDateString("id-ID")}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="" />
        </div>
      )}
    </>
  );
}

export default Galeri;
