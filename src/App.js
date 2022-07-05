import React from "react";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import "./assets/style/fonts.css";
import "./assets/style/utilities.css";
// import "./assets/style/globals.css";
// import "./assets/style/Home.module.css";

import LandingPage from "./pages";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
