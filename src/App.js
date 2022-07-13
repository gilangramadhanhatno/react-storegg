import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "aos/dist/aos.css";
import "aos/dist/aos.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./assets/style/fonts.css";
import "./assets/style/utilities.css";
// import "./assets/style/globals.css";
// import "./assets/style/Home.module.css";

import AOS from "aos";

import LandingPage from "./pages";
import DetailPage from "./pages/DetailPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SignUpPhoto from "./pages/SignUpPhoto";
import SignUpSuccess from "./pages/SignUpSuccess";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    //  AOS Animation
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="detail-page">
          <Route path=":id" element={<DetailPage />} />
        </Route>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-up-photo" element={<SignUpPhoto />} />
        <Route path="sign-up-success" element={<SignUpSuccess />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
