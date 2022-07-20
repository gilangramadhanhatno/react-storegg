import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import cx from "classnames";

export default function MenuItem(props) {
  const { icon, href, title, active } = props;
  const className = cx({
    item: true,
    "mb-30": true,
    active,
  });
  return (
    <div className={className}>
      <img src={`/assets/icon/icon-menu-${icon}.svg`} alt="menu icon" className="icon me-3" />
      <p className="item-title m-0">
        <Link to={href} className="text-lg text-decoration-none">
          {title}
        </Link>
      </p>
    </div>
  );
}

MenuItem.propTypes = {
  icon: propTypes.string,
  href: propTypes.bool,
  title: propTypes.string,
  active: propTypes.bool,
};
