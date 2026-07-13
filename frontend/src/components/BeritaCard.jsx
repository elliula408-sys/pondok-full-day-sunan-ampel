import { Link } from "react-router-dom";

function BeritaCard({ berita }) {
  return (
    <div className="card h-100">
      <img
        src={`http://localhost:5000/uploads/${berita.thumbnail}`}
        className="card-img-top"
        style={{
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div className="card-body">
        <h5>{berita.judul}</h5>

        <Link to={`/berita/${berita.id}`} className="btn btn-success">
          Baca Selengkapnya
        </Link>
      </div>
    </div>
  );
}

export default BeritaCard;
