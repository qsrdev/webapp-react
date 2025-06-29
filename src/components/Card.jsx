import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  //destrutturo movie
  const { id, title, director, image, abstract } = movie;

  return (
    <div className="card h-100 bg-dark-subtle">
      <img style={{ height: 450 }} src={image || "https://placehold.co/350x350?text=Placeholder"} className="card-img-top object-fit-cover" alt={`Immagine di ${title}`} />
      <div className="card-body">
        <h5 className="card-title text-center fw-bold">{title}</h5>
        <small class="text-body-secondary fst-italic">Directed by {director}</small>
        <p className="card-text ">{abstract}</p>
      </div>
      <div class="card-footer text-center">
        <Link to={`/movies/${id}`} className="btn btn-success">
          More Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
