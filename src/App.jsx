import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "../layout/UserLayout";
import Home from "../pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<UserLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
