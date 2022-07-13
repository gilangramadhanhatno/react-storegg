import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import imagePreview_ from "../assets/img/Sign-up-photo-1.png";

import "../assets/style/sign-up-photo.css";

export default function SignUpPhoto() {
  const [categories, setCategories] = useState([]);
  const [favorite, setFavorite] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [localStorageForm, setLocalStorageForm] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();

  const getGameCategoryAPI = useCallback(async () => {
    const response = await axios.get("https://bwamern-storegg-backend.herokuapp.com/api/v1/players/category");
    setCategories(response.data.data);
    setFavorite(response.data.data[0]._id);
  });

  const setSignUp = async (data) => {
    const response = await axios.post("https://bwamern-storegg-backend.herokuapp.com/api/v1/auth/signup", data).catch((error) => error.response);
    const axiosResponse = response.data;

    if (axiosResponse?.error === 1) {
      return axiosResponse;
    }
    return axiosResponse.data;
  };

  useEffect(() => {
    getGameCategoryAPI();
  }, []);

  useEffect(() => {
    const getLocalStorageForm = localStorage.getItem("user-form");
    setLocalStorageForm(JSON.parse(getLocalStorageForm));
  }, []);

  const onSubmit = async () => {
    const getLocalStorageForm = await localStorage.getItem("user-form");
    const form = JSON.parse(getLocalStorageForm);
    const data = new FormData();

    data.append("image", image);
    data.append("email", form.email);
    data.append("name", form.name);
    data.append("password", form.password);
    data.append("username", form.name);
    data.append("phoneNumber", "081223188722");
    data.append("role", "user");
    data.append("status", "Y");
    data.append("favorite", favorite);

    const result = await setSignUp(data);
    if (result?.error === 1) {
      toast.error(result.message);
    } else {
      toast.success("Register Berhasil");
      navigate("/sign-up-success");
      localStorage.removeItem("user-form");
    }
  };

  // useEffect(() => {
  //   const getGameCategoryAPI = async () => {
  //     try {
  //       const response = await axios.get("https://bwamern-storegg-backend.herokuapp.com/api/v1/players/category");
  //       console.log(response.data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   getGameCategoryAPI();
  // }, []);

  return (
    <section className="sign-up-photo mx-auto pb-lg-227 pt-130 pb-50">
      <div className="container mx-auto">
        <form action="">
          <div className="form-input d-md-block d-flex flex-column">
            <div>
              <div className="mb-20">
                <div className="image-upload text-center">
                  <label htmlFor="avatar">{imagePreview ? <img src={imagePreview} className="img-upload" alt="ImagePreview" /> : <img src={imagePreview_} alt="ImagePreview_" />}</label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(event) => {
                      const img = event.target.files[0];
                      setImagePreview(URL.createObjectURL(img));
                      return setImage(img);
                    }}
                  />
                </div>
              </div>
              <h2 className="fw-bold text-xl text-center color-palette-1 m-0">{localStorageForm.name}</h2>
              <p className="text-lg text-center color-palette-1 m-0">{localStorageForm.email}</p>
              <div className="pt-50 pb-50">
                <label htmlFor="category" className="form-label text-lg fw-medium color-palette-1 mb-10">
                  Favorite Game
                </label>
                <select id="category" name="category" className="form-select d-block w-100 rounded-pill text-lg" aria-label="Favorite Game" value={favorite} onChange={(event) => setFavorite(event.target.value)}>
                  {categories.map((category) => {
                    return (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="button-group d-flex flex-column mx-auto">
              <button type="button" className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16" role="button" onClick={onSubmit}>
                Create My Account
              </button>
              <a className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15" href="#" role="button">
                Terms & Conditions
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
