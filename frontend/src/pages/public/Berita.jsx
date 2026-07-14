import { useEffect, useState } from "react";

import api from "../../services/api";

import Navbar from "../../components/Navbar";

import Footer from "../../components/Footer";

import BeritaCard from "../../components/BeritaCard";

function Berita() {
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    getBerita();
  }, []);

  const getBerita = async () => {
    const res = await api.get("/berita");

    setBerita(res.data);
  };

  return (
    <>
      <div className="container py-5">
        <h1 className="text-center mb-5">Berita Pondok</h1>

        <div className="row">
          {berita.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <BeritaCard berita={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Berita;
