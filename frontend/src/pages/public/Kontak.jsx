import { useState } from "react";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

function Kontak() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");

  const kirimPesan = (e) => {
    e.preventDefault();

    if (!nama || !email || !pesan) {
      alert("Semua field wajib diisi");
      return;
    }

    alert("Pesan berhasil dikirim");

    setNama("");
    setEmail("");
    setPesan("");
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
          <h1 className="fw-bold">Hubungi Kami</h1>

          <p>Pondok Full Day Sunan Ampel</p>
        </div>
      </section>

      {/* KONTEN */}

      <div className="container py-5">
        <div className="row">
          {/* INFO KONTAK */}

          <div className="col-md-5 mb-4">
            <div className="card shadow border-0 h-100">
              <div className="card-body">
                <h3 className="mb-4 text-success">Informasi Kontak</h3>

                <p>
                  <FaMapMarkerAlt className="text-danger me-2" />
                  Pondok Full Day Sunan Ampel, Banyuwangi, Jawa Timur
                </p>

                <p>
                  <FaPhone className="text-primary me-2" />
                  0812-3456-7890
                </p>

                <p>
                  <FaWhatsapp className="text-success me-2" />
                  0812-3456-7890
                </p>

                <p>
                  <FaEnvelope className="text-warning me-2" />
                  admin@ponpes-sunanampel.sch.id
                </p>

                <p>
                  <FaClock className="text-secondary me-2" />
                  Senin - Sabtu 08.00 - 16.00 WIB
                </p>

                <hr />

                <h5>Media Sosial</h5>

                <div className="d-flex gap-3 fs-4">
                  <FaFacebook className="text-primary" />

                  <FaInstagram className="text-danger" />

                  <FaYoutube className="text-danger" />
                </div>

                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-success mt-4"
                >
                  <FaWhatsapp className="me-2" />
                  Chat WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* FORM */}

          <div className="col-md-7">
            <div className="card shadow border-0">
              <div className="card-body">
                <h3 className="mb-4">Kirim Pesan</h3>

                <form onSubmit={kirimPesan}>
                  <div className="mb-3">
                    <label className="form-label">Nama Lengkap</label>

                    <input
                      type="text"
                      className="form-control"
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>

                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Pesan</label>

                    <textarea
                      rows="5"
                      className="form-control"
                      value={pesan}
                      onChange={(e) => setPesan(e.target.value)}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-success">
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* MAPS */}

        <div className="mt-5">
          <div className="card shadow border-0">
            <div className="card-body">
              <h3 className="mb-4">Lokasi Pondok</h3>

              <iframe
                title="lokasi pondok"
                src="https://maps.google.com/maps?q=Banyuwangi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                style={{
                  border: 0,
                  borderRadius: "10px",
                }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Kontak;
