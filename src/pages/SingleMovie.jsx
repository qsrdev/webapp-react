import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
  const { slug } = useParams();
  const [infoMovie, setInfoMovie] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/movies/${slug}`).then((resp) => {
      setInfoMovie(resp.data.data);
      console.log(infoMovie);
    });
  }, []);

  return (
    <>
      <main>
        <section className="container">
          <div className="card text-bg-dark">
            <img src={infoMovie.image} className="card-img object-fit-fill" alt={infoMovie.title} />
            <div className="card-img-overlay">
              <h5 className="card-title">{infoMovie.title}</h5>
              <p className="card-text">{infoMovie.abstract}</p>
              <p className="card-text">
                <small>Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SingleMovie;
