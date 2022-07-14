import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const setLogin = async (data) => {
    const response = await axios.post("https://bwamern-storegg-backend.herokuapp.com/api/v1/auth/signin", data).catch((error) => error.response);
    const axiosResponse = response.data;
    if (response.status > 300) {
      const res = {
        error: true,
        message: axiosResponse.message,
        data: null,
      };
      return res;
    }
    const res = {
      error: false,
      message: "success",
      data: axiosResponse.data,
    };
    return res;
  };

  const onSubmit = async () => {
    const data = {
      email,
      password,
    };
    if (!email || !password) {
      toast.error("Email dan Password wajib diisi!!!");
    } else {
      const response = await setLogin(data);
      if (response.error) {
        toast.error(response.message);
      } else {
        toast.success("Login Berhasil");
        const token = response.data.token;
        const tokenBase64 = btoa(token);
        Cookies.set("tkn", tokenBase64, { expires: 1 });
        navigate("/");
      }
    }
  };

  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
      <p className="text-lg color-palette-1 m-0">Masuk untuk melakukan proses top up</p>
      <div className="pt-50">
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
        <button type="button" className="btn btn-signin fw-medium text-lg text-white rounded-pill mb-16" onClick={onSubmit}>
          Continue to Sign In
        </button>
        <Link to="/sign-up" className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill">
          Sign Up
        </Link>
      </div>
    </>
  );
}
