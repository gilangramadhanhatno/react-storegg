import React from "react";
import imagePreview from "../assets/img/Sign-up-photo-1.png";

import "../assets/style/sign-up-photo.css";

export default function SignUpPhoto() {
  return (
    <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
      <div className="container mx-auto">
        <form action="">
          <div className="form-input d-md-block d-flex flex-column">
            <div>
              <div className="mb-20">
                <div className="image-upload text-center">
                  <label htmlFor="avatar">
                    <img src={imagePreview} alt="ImagePreview" />
                  </label>
                  <input id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" />
                </div>
              </div>
              <h2 className="fw-bold text-xl text-center color-palette-1 m-0">Shayna Anne</h2>
              <p className="text-lg text-center color-palette-1 m-0">shayna@anne.com</p>
              <div className="pt-50 pb-50">
                <label htmlFor="category" className="form-label text-lg fw-medium color-palette-1 mb-10">
                  Favorite Game
                </label>
                <select id="category" name="category" className="form-select d-block w-100 rounded-pill text-lg" aria-label="Favorite Game">
                  <option value="" disabled>
                    Select Category
                  </option>
                  <option value="mobile">Mobile</option>
                  <option value="desktop">Desktop</option>
                  <option value="pc">PC</option>
                </select>
              </div>
            </div>

            <div className="button-group d-flex flex-column mx-auto">
              <a className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16" role="button">
                Create My Account
              </a>
              {/* <!-- <button type="submit" className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                            role="button">Create My Account</button> --> */}
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
