import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmit = () => {
    if (name === "" || email === "" || password === "") {
      toast.error("Silahkan isi semua data");
    } else {
      const userForm = {
        name,
        email,
        password,
      };
      localStorage.setItem("user-form", JSON.stringify(userForm));
      navigate("/sign-up-photo");
    }
  };

  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
      <p className="text-lg color-palette-1 m-0">Daftar dan bergabung dengan kami</p>
      <div className="pt-50">
        <label htmlFor="name" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Full Name
        </label>
        <input type="text" className="form-control rounded-pill text-lg" id="name" name="name" aria-describedby="name" placeholder="Enter your name" value={name} onChange={(event) => setName(event.target.value)} />
      </div>
      <div className="pt-30">
        <label htmlFor="email" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Email Address
        </label>
        <input type="email" className="form-control rounded-pill text-lg" id="email" name="email" aria-describedby="email" placeholder="Enter your email address" value={email} onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div className="pt-30">
        <label htmlFor="password" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Password
        </label>
        <input type="password" className="form-control rounded-pill text-lg" id="password" name="password" aria-describedby="password" placeholder="Your password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button type="button" className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16" role="button" onClick={onSubmit}>
          Continue
        </button>
        <Link to="/sign-in" className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill">
          Sign In
        </Link>
      </div>
    </>
  );
}
