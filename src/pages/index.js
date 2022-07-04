import React, { useEffect } from "react";
import AOS from "aos";

import Navbar from "../components/Navbar";
import MainBanner from "../components/MainBanner";
import Feature from "../components/Feature";

import "../assets/style/index.css";

export default function LandingPage() {
  useEffect(() => {
    //  AOS Animation
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <MainBanner />
      <Feature />
    </>
  );
}
