import { Link } from "react-router-dom";

export default function HomeCard({ movie }) {
  const { id, title, director, image, abstract } = movie;
  return (
    <>
      <div className="col" key={id}>
        <div className="card border-white rounded-3" style={{ backgroundColor: "#141414" }}>
          <Link className="" to={`/movies/${id}`}>
            <img src={image} alt={title} className="w-100 rounded-3" style={{ height: "300px", objectFit: "cover" }} />
          </Link>
        </div>
      </div>
    </>
  );
}
