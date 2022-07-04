import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import "../assets/style/index.css";
import AOS from "aos";
import MainBanner from "../components/MainBanner";

export default function LandingPage() {
  useEffect(() => {
    //  AOS Animation
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <MainBanner />
    </>
  );
}
