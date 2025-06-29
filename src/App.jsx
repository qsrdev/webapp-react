import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieList from "./pages/MovieList";
import Singlemovie from "./pages/SingleMovie";
import UserLayout from "./layout/UserLayout";
import MovieContext from "./context/Context";
import Home from "./pages/Home";

export default function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/movies`).then((resp) => {
      setMovies(resp.data.data);
    });
  }, []);

  return (
    <MovieContext.Provider value={movies}>
      <BrowserRouter>
        <Routes>
          <Route element={<UserLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="/movies/:id" element={<Singlemovie />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MovieContext.Provider>
  );
}
