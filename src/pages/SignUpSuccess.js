import React from "react";
import { Link } from "react-router-dom";
import IllustrationSuccess from "../assets/img/Sign-up-success-1.png";
import "../assets/style/sign-up-success.css";

export default function SignUpSuccess() {
  return (
    <section className="sign-up-success mx-auto pt-md-179 pb-md-179 pt-150 pb-100">
      <div className="container-fluid">
        <div className="text-center">
          <img src={IllustrationSuccess} alt="SignUp Success" />
        </div>
        <div className="pt-70 pb-md-50 pb-150">
          <h2 className="text-4xl fw-bold text-center color-palette-1 mb-10">Well Done!</h2>
          <p className="text-lg text-center color-palette-1 m-0">
            Kamu sudah bisa melakukan top up
            <br className="d-sm-block d-none" />
            dan menjadi pemenang!
          </p>
        </div>
        <div className="button-group d-flex flex-column mx-auto">
          <Link to="/sign-in" className="btn btn-top-up fw-medium text-lg text-white rounded-pill">
            Top Up
          </Link>
        </div>
      </div>
    </section>
  );
}