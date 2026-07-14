import {
  FaMosque,
  FaBook,
  FaGraduationCap,
  FaLaptop,
  FaUsers,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Profil() {
  return (
    <>
      {/* HEADER */}
      <section
        className="text-white text-center py-5"
        style={{
          background: "linear-gradient(135deg,#198754,#0d6efd)",
        }}
      >
        <div className="container">
          <h1 className="fw-bold">Profil Pondok Full Day Sunan Ampel</h1>

          <p className="lead">
            Mencetak Generasi Islami, Berilmu, Berakhlakul Karimah dan
            Berprestasi
          </p>
        </div>
      </section>

      {/* SAMBUTAN */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img
              src="../../assets/images/pengasuh.jpg"
              alt="Pengasuh Pondok"
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-md-8">
            <h2 className="fw-bold mb-4">Sambutan Pengasuh</h2>

            <p>Assalamu'alaikum Warahmatullahi Wabarakatuh.</p>

            <p>
              Selamat datang di Website Pondok Full Day Sunan Ampel. Website ini
              menjadi media informasi, komunikasi, serta pelayanan kepada
              masyarakat dan calon santri baru.
            </p>

            <p>
              Kami berkomitmen mencetak generasi Qurani yang memiliki akhlak
              mulia, ilmu pengetahuan, dan keterampilan yang siap menghadapi
              tantangan zaman.
            </p>

            <h5 className="mt-4">KH. Nama Pengasuh Pondok</h5>

            <small className="text-muted">
              Pengasuh Pondok Full Day Sunan Ampel
            </small>
          </div>
        </div>
      </section>

      {/* SEJARAH */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="fw-bold mb-4">Sejarah Pondok</h2>

          <p>
            Pondok Full Day Sunan Ampel didirikan sebagai lembaga pendidikan
            Islam yang mengintegrasikan pendidikan formal, pendidikan pesantren,
            dan pembinaan karakter Islami.
          </p>

          <p>
            Sejak berdiri, pondok terus berkembang dan menjadi salah satu pusat
            pendidikan Islam yang berfokus pada pembentukan generasi berakhlakul
            karimah, berwawasan luas, dan mampu bersaing di era modern.
          </p>
        </div>
      </section>

      {/* VISI MISI */}
      <section className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <div className="card shadow border-0 h-100">
              <div className="card-body">
                <h3 className="text-success">Visi</h3>

                <p>
                  Menjadi lembaga pendidikan Islam unggul yang menghasilkan
                  generasi Qurani, mandiri, berprestasi dan berakhlakul karimah.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card shadow border-0 h-100">
              <div className="card-body">
                <h3 className="text-primary">Misi</h3>

                <ul>
                  <li>Menanamkan akidah Islam yang kuat.</li>

                  <li>Mengembangkan potensi akademik dan non akademik.</li>

                  <li>Membiasakan akhlakul karimah.</li>

                  <li>Menumbuhkan jiwa mandiri dan bertanggung jawab.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Program Pendidikan</h2>

          <div className="row g-4">
            <div className="col-md-3">
              <div className="card text-center shadow border-0 h-100">
                <div className="card-body">
                  <FaMosque size={50} className="text-success mb-3" />

                  <h5>Madrasah Diniyah</h5>

                  <p>Kajian kitab dan ilmu agama Islam.</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card text-center shadow border-0 h-100">
                <div className="card-body">
                  <FaBook size={50} className="text-primary mb-3" />

                  <h5>Tahfidz Qur'an</h5>

                  <p>Program hafalan dan pembelajaran Al-Qur'an.</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card text-center shadow border-0 h-100">
                <div className="card-body">
                  <FaGraduationCap size={50} className="text-warning mb-3" />

                  <h5>Pendidikan Formal</h5>

                  <p>SMP dan SMK Full Day.</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card text-center shadow border-0 h-100">
                <div className="card-body">
                  <FaLaptop size={50} className="text-danger mb-3" />

                  <h5>Keterampilan IT</h5>

                  <p>Pembelajaran teknologi dan komputer.</p>
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
              <p>Guru & Ustadz</p>
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

      {/* FASILITAS */}
      <section className="container py-5">
        <h2 className="text-center fw-bold mb-5">Fasilitas Pondok</h2>

        <div className="row text-center">
          <div className="col-md-3 mb-3">
            <div className="card shadow border-0 p-4">Asrama Santri</div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card shadow border-0 p-4">Masjid</div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card shadow border-0 p-4">
              Laboratorium Komputer
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card shadow border-0 p-4">Perpustakaan</div>
          </div>
        </div>
      </section>

      {/* LOKASI */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="fw-bold mb-4">
            <FaMapMarkerAlt /> Lokasi Pondok
          </h2>

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
      </section>
    </>
  );
}

export default Profil;
