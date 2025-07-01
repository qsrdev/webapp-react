import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import MovieContext from "../context/Context.jsx";
import HomeCard from "../components/Homecard.jsx";

const Home = () => {
  const movies = useContext(MovieContext);
  console.log(movies);

  return (
    <>
      <main>
        <section>
          <div style={{ backgroundColor: "#141414", color: "white" }}>
            <div
              className="hero-banner position-relative object-fit-cover object-position-center"
              style={{
                background: "url('/banner.jpg') center",
                backgroundSize: "cover",
                height: "50vh",
              }}
            >
              <div
                className="hero-overlay d-flex align-items-end p-4 position-absolute"
                style={{
                  background: "rgba(0, 0, 0, 0.6)",
                  height: "100%",
                  width: "100%",
                  top: 0,
                  left: 0,
                }}
              >
                <div>
                  <h1>Inception</h1>
                  <p>A skilled thief is given a chance at redemption if he can successfully perform inception.</p>
                  <Link to={`/movies/1`} className="btn btn-danger me-2">
                    Watch now!
                  </Link>
                  <button className="btn btn-secondary disabled">Add to list</button>
                </div>
              </div>
            </div>

            <div className="container p-5">
              <h2 className="mb-3">See available titles</h2>
              <div className="d-flex overflow-auto row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4">
                {movies.map((curMovie) => (
                  <HomeCard key={curMovie.id} movie={curMovie} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
