import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Profil() {
  return (
    <>
      {/* Banner */}
      <section className="bg-success text-white text-center py-5">
        <div className="container">
          <h1>Profil Pondok Full Day Sunan Ampel</h1>

          <p>Mencetak Generasi Islami, Berilmu dan Berakhlakul Karimah</p>
        </div>
      </section>

      {/* Sambutan */}
      <section className="container py-5">
        <h2 className="mb-4">Sambutan Pengasuh</h2>

        <p>Assalamu'alaikum Warahmatullahi Wabarakatuh.</p>

        <p>
          Selamat datang di Website Pondok Full Day Sunan Ampel. Website ini
          dibuat sebagai sarana informasi dan pelayanan kepada masyarakat serta
          calon santri baru.
        </p>
      </section>

      {/* Sejarah */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4">Sejarah Pondok</h2>

          <p>
            Pondok Full Day Sunan Ampel didirikan sebagai lembaga pendidikan
            Islam yang mengintegrasikan pendidikan formal dan pendidikan
            pesantren.
          </p>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h2>Visi</h2>

            <p>
              Menjadi lembaga pendidikan Islam unggul yang menghasilkan generasi
              Qurani, mandiri, dan berprestasi.
            </p>
          </div>

          <div className="col-md-6">
            <h2>Misi</h2>

            <ul>
              <li>Menanamkan akidah Islam yang kuat.</li>

              <li>Mengembangkan kemampuan akademik dan non akademik.</li>

              <li>Membiasakan akhlakul karimah.</li>

              <li>Menumbuhkan kemandirian.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Program */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4">Program Pendidikan</h2>

          <div className="row">
            <div className="col-md-4">
              <div className="card p-3 shadow-sm">
                <h4>Madrasah Diniyah</h4>

                <p>Pendidikan agama Islam berbasis kitab kuning.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3 shadow-sm">
                <h4>Tahfidz Qur'an</h4>

                <p>Program hafalan Al-Qur'an.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3 shadow-sm">
                <h4>Pendidikan Formal</h4>

                <p>SMP dan SMK Full Day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fasilitas */}
      <section className="container py-5">
        <h2 className="mb-4">Fasilitas</h2>

        <div className="row">
          <div className="col-md-3">
            <div className="fasilitas-card">Asrama Santri</div>
          </div>

          <div className="col-md-3">
            <div className="fasilitas-card">Masjid</div>
          </div>

          <div className="col-md-3">
            <div className="fasilitas-card">Laboratorium Komputer</div>
          </div>

          <div className="col-md-3">
            <div className="fasilitas-card">Perpustakaan</div>
          </div>
        </div>
      </section>

      {/* Maps */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4">Lokasi Pondok</h2>

          <iframe
            title="maps"
            src="https://www.google.com/maps"
            width="100%"
            height="400"
          ></iframe>
        </div>
      </section>

      {/* Kontak */}
      <section className="container py-5">
        <h2>Kontak</h2>

        <p>Email: info@ponpes.id</p>

        <p>Telepon: 081234567890</p>
      </section>
    </>
  );
}

export default Profil;
