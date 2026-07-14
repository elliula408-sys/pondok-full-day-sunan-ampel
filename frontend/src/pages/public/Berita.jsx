import { useEffect, useState } from "react";
import { FaSearch, FaNewspaper } from "react-icons/fa";

import api from "../../services/api";
import BeritaCard from "../../components/BeritaCard";

function Berita() {
  const [berita, setBerita] = useState([]);
  const [filteredBerita, setFilteredBerita] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    getBerita();
  }, []);

  useEffect(() => {
    const hasilFilter = berita.filter((item) =>
      item.judul.toLowerCase().includes(keyword.toLowerCase()),
    );

    setFilteredBerita(hasilFilter);
  }, [keyword, berita]);

  const getBerita = async () => {
    try {
      const res = await api.get("/berita");

      setBerita(res.data);
      setFilteredBerita(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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
          <FaNewspaper size={60} />

          <h1 className="fw-bold mt-3">Berita Pondok</h1>

          <p>Informasi dan kegiatan terbaru Pondok Full Day Sunan Ampel</p>
        </div>
      </section>

      {/* KONTEN */}

      <div className="container py-5">
        {/* PENCARIAN */}

        <div className="row mb-4">
          <div className="col-md-6 mx-auto">
            <div className="input-group">
              <span className="input-group-text">
                <FaSearch />
              </span>

              <input
                type="text"
                className="form-control"
                placeholder="Cari berita..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* JUMLAH BERITA */}

        <div className="text-center mb-4">
          <h5>Total Berita : {filteredBerita.length}</h5>
        </div>

        {/* DATA BERITA */}

        {loading ? (
          <div className="text-center">
            <h5>Memuat berita...</h5>
          </div>
        ) : filteredBerita.length > 0 ? (
          <div className="row">
            {filteredBerita.map((item) => (
              <div key={item.id} className="col-md-4 mb-4">
                <BeritaCard berita={item} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <div className="alert alert-warning">
              Berita yang dicari tidak ditemukan.
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Berita;
