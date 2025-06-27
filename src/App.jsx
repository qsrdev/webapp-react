import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "../layout/UserLayout";
import Home from "../pages/Home";
import MovieList from "../pages/MovieList";
import Singlemovie from "../pages/SingleMovie";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<UserLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="/movies/:id" element={<Singlemovie />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
