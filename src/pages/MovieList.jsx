import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/movies`).then((resp) => {
      setMovies(resp.data.data);
      console.log(movies);
    });
  }, []);

  return (
    <>
      <main>
        <section style={{ backgroundColor: "#141414", color: "white" }}>
          <div className="container py-5">
            <h1 className="text-center mb-4">Your Library</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              {movies.map((curMovie) => (
                <div className="col" key={curMovie.id}>
                  <Card key={curMovie.id} movie={curMovie} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MovieList;
