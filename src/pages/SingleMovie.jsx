import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReviewForm from "../components/Reviews/ReviewForm";

const SingleMovie = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [infoMovie, setInfoMovie] = useState({});

  useEffect(() => {
    getMovieDetails();
  }, []);

  const getMovieDetails = () => {
    axios
      .get(`http://localhost:3000/movies/${slug}`)
      .then((resp) => {
        setInfoMovie(resp.data.data);
      })
      .catch((err) => {
        if (err.status === 404) {
          navigate("/not-found");
        }
      });
  };

  const reviewArray = infoMovie.reviews || [];

  return (
    <>
      <main style={{ backgroundColor: "#141414", color: "white" }}>
        {infoMovie && infoMovie.image && (
          <section>
            <img className="banner" src={infoMovie.image} alt="" />
          </section>
        )}
        <section className="container">
          <div class="card mt-5 mb-5">
            <img src="https://placehold.co/600x400?text=Video+Player" class="card-img-bottom object-fit-cover" alt="..." style={{ height: "600px" }} />
            <div class="card-body">
              <h5 class="card-title">{infoMovie.title}</h5>
              <small class="text-body-secondary">Directed By {infoMovie.director}</small>
              <p class="card-text">{infoMovie.abstract}</p>
              <p class="card-text"></p>
            </div>
          </div>
        </section>

        <section className="container">
          <h2 className="text-center mb-4">Reviews from other users</h2>
          <div className="row row-cols-1 g-3">
            {reviewArray.map((curReview) => (
              <div className="col" key={curReview.id}>
                <div className="card">
                  <div className="card-header">Ho dato {curReview.vote} al film</div>
                  <div className="card-body">
                    <figure>
                      <blockquote className="blockquote">
                        <p>{curReview.text}</p>
                      </blockquote>
                      <figcaption className="blockquote-footer">
                        <cite title="Source Title">{curReview.name}</cite> il {curReview.created_at}
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container py-5">
          <h2 className="text-center mb-4">Leave your review</h2>
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-xl-6">
              <div className="card">
                <ReviewForm movie_id={infoMovie.id} reloadReviews={getMovieDetails} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SingleMovie;
