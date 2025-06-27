import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  //destrutturo movie
  const { id, title, director, image, abstract } = movie;

  return (
    <div className="card h-100">
      <img style={{ height: 450 }} src={image || "https://placehold.co/350x350?text=Placeholder"} className="card-img-top object-fit-cover" alt={`Immagine di ${title}`} />
      <div className="card-body">
        <h5 className="card-title">
          {director} - {title}
        </h5>
        <p className="card-text">{abstract}</p>
        <Link to={`/movies/${id}`} className="btn btn-success">
          Maggiori Dettagli
        </Link>
      </div>
    </div>
  );
};

export default Card;
