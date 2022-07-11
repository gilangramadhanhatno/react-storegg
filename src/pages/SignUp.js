import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/icon/logo.svg";
import SignUpForm from "../components/SignForm";

import "../assets/style/sign-up.css";

export default function SignUp() {
  return (
    <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
      <div className="container mx-auto">
        <form action="">
          <div className="pb-50">
            <Link to="/">
              <img src={Logo} alt="logo" width={60} height={60} />
            </Link>
          </div>
          <SignUpForm />
        </form>
      </div>
    </section>
  );
}
