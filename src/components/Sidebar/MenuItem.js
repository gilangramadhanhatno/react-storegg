import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import cx from "classnames";

export default function MenuItem(props) {
  const { icon, href, title, active, onClick } = props;
  const className = cx({
    item: true,
    "mb-30": true,
    active,
  });
  return (
    <div className={className} onClick={onClick}>
      <img src={`/assets/icon/icon-menu-${icon}.svg`} alt="menu icon" className="icon me-3" />
      <p className="item-title m-0">
        {onClick ? (
          <a href={href} className="text-lg text-decoration-none">
            {title}
          </a>
        ) : (
          <Link to={href} className="text-lg text-decoration-none" role="button">
            {title}
          </Link>
        )}
      </p>
    </div>
  );
}

MenuItem.propTypes = {
  icon: propTypes.string,
  href: propTypes.string,
  title: propTypes.string,
  active: propTypes.bool,
  onClick: propTypes.func,
};
