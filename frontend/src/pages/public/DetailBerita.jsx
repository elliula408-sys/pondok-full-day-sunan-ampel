import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import api from "../../services/api";

import Navbar from "../../components/Navbar";

import Footer from "../../components/Footer";

function DetailBerita() {
  const { slug } = useParams();

  const [berita, setBerita] = useState(null);

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    const res = await api.get(`/berita/slug/${slug}`);

    setBerita(res.data);
  };

  if (!berita) return <div>Loading...</div>;

  return (
    <>
      <div className="container py-5">
        <img
          src={`http://localhost:5000/uploads/${berita.thumbnail}`}
          className="img-fluid rounded mb-4"
        />

        <p className="text-muted mb-4">
          Dipublikasikan:{" "}
          {new Date(berita.created_at).toLocaleDateString("id-ID")}
        </p>

        <hr />

        <div
          dangerouslySetInnerHTML={{
            __html: berita.isi,
          }}
        />
      </div>
    </>
  );
}

export default DetailBerita;
