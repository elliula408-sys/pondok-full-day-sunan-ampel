import { useEffect, useState } from "react";
import { FaImages, FaSearch, FaCalendarAlt } from "react-icons/fa";

import api from "../../services/api";

function Galeri() {
  const [galeri, setGaleri] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedImage, setSelectedImage] = useState(null);

  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    getGaleri();
  }, []);

  const getGaleri = async () => {
    try {
      const res = await api.get("/galeri");

      setGaleri(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredGaleri = galeri.filter((item) =>
    item.nama_acara?.toLowerCase().includes(keyword.toLowerCase()),
  );

  const groupedGaleri = filteredGaleri.reduce((groups, item) => {
    const acara = item.nama_acara;

    if (!groups[acara]) {
      groups[acara] = [];
    }

    groups[acara].push(item);

    return groups;
  }, {});

  return (
    <>
      {/* HEADER */}

      <section
        className="text-white py-5"
        style={{
          background: "linear-gradient(135deg,#198754,#0d6efd)",
        }}
      >
        <div className="container text-center">
          <FaImages size={60} />

          <h1 className="fw-bold mt-3">Galeri Pondok</h1>

          <p>Dokumentasi kegiatan Pondok Full Day Sunan Ampel</p>
        </div>
      </section>

      <div className="container py-5">
        {/* SEARCH */}

        <div className="row mb-4">
          <div className="col-md-6 mx-auto">
            <div className="input-group">
              <span className="input-group-text">
                <FaSearch />
              </span>

              <input
                type="text"
                className="form-control"
                placeholder="Cari acara..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* TOTAL FOTO */}

        <div className="text-center mb-4">
          <h5>Total Foto : {filteredGaleri.length}</h5>
        </div>

        {/* LOADING */}

        {loading ? (
          <div className="text-center">
            <h5>Memuat galeri...</h5>
          </div>
        ) : Object.keys(groupedGaleri).length > 0 ? (
          Object.keys(groupedGaleri).map((acara) => (
            <div key={acara} className="mb-5">
              <div className="d-flex align-items-center mb-3">
                <FaImages className="text-success me-2" />

                <h3 className="text-success mb-0">{acara}</h3>
              </div>

              <div className="row">
                {groupedGaleri[acara].map((item) => (
                  <div key={item.id} className="col-md-3 mb-4">
                    <div className="card border-0 shadow h-100">
                      <img
                        src={`http://localhost:5000/uploads/${item.foto}`}
                        alt={item.nama_acara}
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
                        <p className="mb-2">{item.deskripsi}</p>

                        <small className="text-muted">
                          <FaCalendarAlt />{" "}
                          {new Date(item.tanggal).toLocaleDateString("id-ID")}
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="alert alert-warning text-center">
            Data galeri belum tersedia.
          </div>
        )}
      </div>

      {/* LIGHTBOX */}

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            cursor: "pointer",
          }}
        >
          <img
            src={selectedImage}
            alt="preview"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "10px",
            }}
          />
        </div>
      )}
    </>
  );
}

export default Galeri;
