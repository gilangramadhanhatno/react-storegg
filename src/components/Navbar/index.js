import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/icon/logo.svg";
import Auth from "./Auth";

export default function Navbar() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={Logo} alt="" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <Link to="/" className="link">
                <li className="nav-item my-auto active">Home</li>
              </Link>
              <Link to="#featured" className="link">
                <li className="nav-item my-auto">Games</li>
              </Link>
              <Link to="/rewards" className="link">
                <li className="nav-item my-auto">Rewards</li>
              </Link>
              <Link to="/discover" className="link">
                <li className="nav-item my-auto">Discover</li>
              </Link>
              <Link to="/global-rank" className="link">
                <li className="nav-item my-auto me-lg-20">Global Rank</li>
              </Link>
              <Auth />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
