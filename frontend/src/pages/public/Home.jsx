import { useEffect, useState } from "react";
import {
  FaMosque,
  FaUserGraduate,
  FaBookOpen,
  FaClipboardCheck,
} from "react-icons/fa";

import api from "../../services/api";
import HeroSlider from "../../components/HeroSlider";
import BeritaCard from "../../components/BeritaCard";

function Home() {
  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBerita();
  }, []);

  const getBerita = async () => {
    try {
      const res = await api.get("/berita");

      setBerita(res.data.slice(0, 3));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* SLIDER */}
      <HeroSlider />

      {/* SAMBUTAN */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h1 className="fw-bold text-success">Pondok Full Day Sunan Ampel</h1>

          <p className="lead mt-3">
            Lembaga pendidikan Islam yang mengintegrasikan pendidikan formal,
            pesantren, dan pembentukan karakter Islami untuk mencetak generasi
            yang berilmu, berakhlak, dan siap menghadapi masa depan.
          </p>
        </div>
      </section>

      {/* KEUNGGULAN */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Keunggulan Pondok</h2>
          </div>

          <div className="row g-4">
            <div className="col-md-3">
              <div className="card shadow border-0 text-center h-100">
                <div className="card-body">
                  <FaMosque size={50} className="text-success mb-3" />
                  <h5>Pendidikan Islami</h5>
                  <p>Kurikulum berbasis Al-Qur'an dan pembentukan akhlak.</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card shadow border-0 text-center h-100">
                <div className="card-body">
                  <FaUserGraduate size={50} className="text-primary mb-3" />
                  <h5>Guru Berpengalaman</h5>
                  <p>Didampingi ustadz dan guru yang kompeten.</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card shadow border-0 text-center h-100">
                <div className="card-body">
                  <FaBookOpen size={50} className="text-warning mb-3" />
                  <h5>Pendidikan Formal</h5>
                  <p>Mengintegrasikan ilmu agama dan ilmu umum.</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card shadow border-0 text-center h-100">
                <div className="card-body">
                  <FaClipboardCheck size={50} className="text-danger mb-3" />
                  <h5>PPDB Online</h5>
                  <p>Sistem pendaftaran online yang mudah dan cepat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTIK */}
      <section className="py-5 bg-success text-white">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3">
              <h1>500+</h1>
              <p>Santri Aktif</p>
            </div>

            <div className="col-md-3">
              <h1>50+</h1>
              <p>Tenaga Pendidik</p>
            </div>

            <div className="col-md-3">
              <h1>20+</h1>
              <p>Tahun Pengalaman</p>
            </div>

            <div className="col-md-3">
              <h1>100%</h1>
              <p>Pendidikan Islami</p>
            </div>
          </div>
        </div>
      </section>

      {/* BERITA TERBARU */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Berita Terbaru</h2>

            <p className="text-muted">
              Informasi terbaru Pondok Full Day Sunan Ampel
            </p>
          </div>

          {loading ? (
            <div className="text-center">Memuat berita...</div>
          ) : (
            <div className="row">
              {berita.length > 0 ? (
                berita.map((item) => (
                  <div key={item.id} className="col-md-4 mb-4">
                    <BeritaCard berita={item} />
                  </div>
                ))
              ) : (
                <div className="text-center">Belum ada berita.</div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* PPDB */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold text-success">
            Penerimaan Peserta Didik Baru
          </h2>

          <p className="mt-3">
            Daftarkan diri Anda menjadi bagian dari keluarga besar Pondok Full
            Day Sunan Ampel.
          </p>

          <a href="/register" className="btn btn-success btn-lg">
            Daftar Sekarang
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
