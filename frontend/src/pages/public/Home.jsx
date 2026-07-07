import HeroSlider from "../../components/HeroSlider";

function Home() {
  return (
    <>
      <HeroSlider />

      <div className="container mt-5">
        <h2>Tentang Pondok</h2>

        <p>
          Pondok Full Day Sunan Ampel merupakan lembaga pendidikan Islam yang
          berfokus pada pembentukan karakter, akademik, dan keagamaan.
        </p>

        <hr />

        <h2>Berita Terbaru</h2>

        <div className="row">
          <div className="col-md-4">Berita 1</div>

          <div className="col-md-4">Berita 2</div>

          <div className="col-md-4">Berita 3</div>
        </div>
      </div>
    </>
  );
}

export default Home;
