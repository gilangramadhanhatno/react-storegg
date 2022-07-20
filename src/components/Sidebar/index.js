import React from "react";
import MenuItem from "./MenuItem";
import Profile from "./Profile";
import SidebarFooter from "./SidebarFooter";
import propTypes from "prop-types";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Sidebar(props) {
  const { activeMenu } = props;

  const navigate = useNavigate();

  const onSubmit = () => {
    Cookies.remove("tkn");
    navigate("/");
  };

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" icon="overview" href="/member" active={activeMenu === "overview"} />
          <MenuItem title="Transactions" icon="transactions" href="/member/transactions" active={activeMenu === "transactions"} />
          <MenuItem title="Messages" icon="messages" href="/member" />
          <MenuItem title="Card" icon="card" href="/member" />
          <MenuItem title="Rewards" icon="rewards" href="/member" />
          <MenuItem title="Settings" icon="settings" href="/member/settings" active={activeMenu === "settings"} />
          <MenuItem title="Log out" icon="logout" href="/" onClick={onSubmit} />
        </div>
        <SidebarFooter />
      </div>
    </section>
  );
}

Sidebar.propTypes = {
  activeMenu: propTypes.string,
};
