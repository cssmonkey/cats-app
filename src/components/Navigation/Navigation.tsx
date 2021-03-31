import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import ROUTES from "../../constants/routes";

import "./navigation.css";

const Navigation: FC = () => {
  const activeClassName = "selected";
  return (
    <nav className="navigation mb-4">
      <ul className="navigation-list">
        <li className="navigation-list__item">
          <NavLink
            to={ROUTES.landingPage}
            className="navigation-link"
            activeClassName={activeClassName}
            exact
          >
            Homepage
          </NavLink>
        </li>
        <li className="navigation-list__item">
          <NavLink to={ROUTES.upload} className="navigation-link" activeClassName={activeClassName}>
            Upload
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
