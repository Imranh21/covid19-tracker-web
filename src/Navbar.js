import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navigation">
      <div className="brand">
        <p>Covid19</p>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>

      <ul className="listGroup" style={{ left: isOpen ? "0px" : "-400px" }}>
        <li onClick={() => setIsOpen(false)}>
          <NavLink to="/" className="link">
            Global
          </NavLink>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <NavLink to="/country" className="link">
            Country
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
