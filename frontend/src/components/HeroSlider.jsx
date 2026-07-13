import { useEffect, useState } from "react";

import api from "../services/api";

function HeroSlider() {
  const [galeri, setGaleri] = useState([]);

  useEffect(() => {
    getGaleri();
  }, []);

  const getGaleri = async () => {
    const res = await api.get("/galeri");

    setGaleri(res.data);
  };

  if (galeri.length === 0) return null;

  return (
    <div id="slider" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {galeri.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={`http://localhost:5000/uploads/${item.foto}`}
              className="d-block w-100"
              style={{
                height: "500px",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSlider;
