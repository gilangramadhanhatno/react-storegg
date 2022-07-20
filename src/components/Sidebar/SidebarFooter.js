import React from "react";
import { Link } from "react-router-dom";
import Winner from "../../assets/icon/step3.svg";

export default function SidebarFooter() {
  return (
    <div className="sidebar-footer pt-73 pe-30">
      <div className="footer-card">
        <div className="d-flex justify-content-between mb-20">
          <img src={Winner} alt="Be a winner" width={50} height={50} />
          <p className="fw-medium color-palette-1">
            Top Up &<br />
            Be The Winner
          </p>
        </div>
        <Link to="/member" className="btn btn-get-started w-100 fw-medium text-xs text-center text-white rounded-pill">
          Get Started
        </Link>
      </div>
    </div>
  );
}
