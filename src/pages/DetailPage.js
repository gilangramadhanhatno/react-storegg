import React from "react";
import Navbar from "../components/Navbar";
import DetailContent from "../components/DetailContent";
import Footer from "../components/Footer";

import "../assets/style/detail.css";

export default function DetailPage() {
  return (
    <>
      <Navbar />
      <DetailContent />
      <Footer />
    </>
  );
}
