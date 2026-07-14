import { useEffect, useState } from "react";

import api from "../../services/api";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeroSlider from "../../components/HeroSlider";
import BeritaCard from "../../components/BeritaCard";

function Home() {
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    getBerita();
  }, []);

  const getBerita = async () => {
    const res = await api.get("/berita");

    setBerita(res.data.slice(0, 3));
  };

  return (
    <>
      <HeroSlider />
      <section>
        <div className="container text-center">
          <h2>Selamat Datang</h2>

          <p>
            Pondok Full Day Sunan Ampel merupakan lembaga pendidikan Islam yang
            mengintegrasikan pendidikan formal, pesantren dan pembentukan
            karakter Islami.
          </p>
        </div>
      </section>

      <div className="container mt-5">
        <div className="text-center mb-5">
          <h2>Berita Terbaru</h2>

          <p>Informasi terbaru Pondok Full Day Sunan Ampel</p>
        </div>

        <div className="row">
          {berita.map((item) => (
            <div key={item.id} className="col-md-4 mb-3">
              <BeritaCard berita={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
