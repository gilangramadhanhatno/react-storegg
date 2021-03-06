import React from "react";

import Navbar from "../components/Navbar";
import MainBanner from "../components/MainBanner";
import Feature from "../components/Feature";
import FeaturedGame from "../components/FeaturedGame";
import Reached from "../components/Reached";
import Story from "../components/Story";
import Footer from "../components/Footer";

import "../assets/style/index.css";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <MainBanner />
      <Feature />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}
