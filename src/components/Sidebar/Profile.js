import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import PictProfile from "../../assets/img/user.png";

export default function Profile() {
  const [user, setUser] = useState({
    avatar: "",
    name: "",
    email: "",
  });

  useEffect(() => {
    const token = Cookies.get("tkn");
    if (token) {
      const jwtToken = atob(token);
      const payload = jwtDecode(jwtToken);
      const userFromPayload = payload.player;
      setUser(userFromPayload);
    }
  }, []);

  return (
    <div className="user text-center pb-50 pe-30">
      <img src={PictProfile} width={90} height={90} className="img-fluid mb-20" alt="Foto Profile" />
      {/* <img src={user.avatar} width={90} height={90} className="img-fluid mb-20" alt="Foto Profile" /> */}
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.name}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
}
