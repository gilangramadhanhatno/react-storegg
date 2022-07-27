import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import React, { useState, useEffect } from "react";
import image from "../../assets/img/Sign-up-photo-1.png";
import { updateProfile } from "../../services/member";
import Input from "./Input";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function SettingsContent() {
  const [user, setUser] = useState({
    id: "id",
    name: "",
    email: "",
    avatar: "",
  });
  const [imagePreview, setImagePreview] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("tkn");
    if (token) {
      const jwtToken = atob(token);
      const payload = jwtDecode(jwtToken);
      const userFromPayload = payload.player;
      setUser(userFromPayload);
    }
  }, []);

  const onSubmit = async () => {
    const data = new FormData();

    data.append("image", user.avatar);
    data.append("name", user.name);

    const response = await updateProfile(data, user.id);
    if (response.error) {
      toast.error(response.message);
    } else {
      console.log("data: ", response);
      Cookies.remove("tkn");
      navigate("/sign-in");
    }
  };

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
        <div className="bg-card pt-30 ps-30 pe-30 pb-30">
          <form action="">
            <div className="photo d-flex">
              <div className="image-upload">
                <label htmlFor="avatar">{imagePreview ? <img src={imagePreview} width={90} height={90} style={{ borderRadius: "100%" }} alt="image preview" /> : <img src={image} alt="image" />}</label>
                <input
                  id="avatar"
                  type="file"
                  name="avatar"
                  accept="image/png, image/jpeg"
                  onChange={(event) => {
                    const img = event.target.files[0];
                    setImagePreview(URL.createObjectURL(img));
                    return setUser({
                      ...user,
                      avatar: img,
                    });
                  }}
                />
              </div>
            </div>
            <div className="pt-30">
              <Input
                label="Full Name"
                value={user.name}
                onChange={(event) =>
                  setUser({
                    ...user,
                    name: event.target.value,
                  })
                }
              />
            </div>
            <div className="pt-30">
              <Input label="Email Address" value={user.email} disabled />
            </div>
            {/* <div className="pt-30">
              <label htmlFor="phone" className="form-label text-lg fw-medium color-palette-1 mb-10">
                Phone
              </label>
              <input type="tel" className="form-control rounded-pill text-lg" id="phone" name="phone" aria-describedby="phone" placeholder="Enter your phone number" />
            </div> */}
            <div className="button-group d-flex flex-column pt-50">
              <button type="submit" className="btn btn-save fw-medium text-lg text-white rounded-pill" onClick={onSubmit}>
                Save My Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
