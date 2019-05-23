import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const navList = [
  { name: "Hva tilbry vi", path: "#" },
  { name: "Bransjer", path: "#" },
  { name: "Nyheter", path: "#" },
  { name: "Om Norkart", path: "#" },
  { name: "e-Torg", path: "#" },
  { name: "Kundesenter", path: "#" },
  { name: "Søk", path: "#" }
];

const Header = () => {
  const menuList = navList.map((item, index) => (
    <li key={index}>
      <Link to={item.path}>{item.name}</Link>
    </li>
  ));
  return (
    <>
      <div className="mobile-header-row">
        <div className="mobile-branding">
          <div className="logo">
            <Link to="#">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <i className="fas fa-bars" />
        </div>

        <nav className="mobile-main-navigation">
          <ul className="navigation-top-level">{menuList}</ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
