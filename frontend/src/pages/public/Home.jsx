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

      <div className="container mt-5">
        <h2 className="mb-4">Berita Terbaru</h2>

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
