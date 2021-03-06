import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    avatar: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("tkn");
    if (token) {
      const jwtToken = atob(token);
      const payload = jwtDecode(jwtToken);
      const userFromPayload = payload.player;
      user.avatar = `https://bwamern-storegg-backend.herokuapp.com/uploads/${userFromPayload.avatar}`;
      setIsLogin(true);
      setUser(user);
    }
  }, []);

  const onLogout = () => {
    Cookies.remove("tkn");
    navigate("/");
    setIsLogin(false);
  };

  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none"></div>
        <div>
          <a className="dropdown-toggle ms-lg-40" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={user.avatar} className="rounded-circle" width="40" height="40" alt="" />
          </a>

          <ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
            <li>
              <Link to="/member" className="dropdown-item text-lg color-palette-2">
                My Profile
              </Link>
            </li>
            <li>
              <Link to="/" className="dropdown-item text-lg color-palette-2">
                Wallet
              </Link>
            </li>
            <li>
              <Link to="/member/edit-profile" className="dropdown-item text-lg color-palette-2">
                Account Settings
              </Link>
            </li>
            <li onClick={onLogout}>
              <a className="dropdown-item text-lg color-palette-2" href="">
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </li>
    );
  }

  return (
    <Link to="/sign-in" className="sign-in">
      <li className="nav-item my-auto">
        <button type="button" className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill" role="button">
          Sign In
        </button>
      </li>
    </Link>
  );
}
