import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../../Images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import {
  FacebookRounded,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";



const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu((prev) => {
      if (prev === true) {
        setTimeout(() => {
          return !prev;
        }, 1000);
      } else {
        return !prev;
      }
    });
  };

  return (
    <nav>
      <div className="top_nav">ADMISSIONS NOW OPEN!!!</div>
      <div className="down_nav">
        <aside className="logo">
          <img src={logo} alt="logo" />
          <h3>
            <span className="vision">VISION</span>
            <span className="academy">ACADEMY</span>
          </h3>
        </aside>
        <aside className="menu_bar" onClick={handleShowMenu}>
          <MenuIcon sx={{ fontSize: 40 }} />
        </aside>
        <aside className="menu_nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>Admission</li>
            <li>
              <Link to="/programs">Programs</Link>
            </li>
            <li>Activities</li>
            {/* <li>Contact</li> */}
          </ul>
        </aside>
        <aside className="nav_icons">
          <FacebookRounded sx={{ fontSize: 30 }} />{" "}
          <Twitter sx={{ fontSize: 30 }} /> <Instagram sx={{ fontSize: 30 }} />{" "}
          <LinkedIn sx={{ fontSize: 30 }} />
        </aside>
      </div>
      {showMenu && (
        <div className={showMenu ? "menu_list" : "hidden"}>
          <ul>
            <li onClick={handleShowMenu}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={handleShowMenu}>
              <Link to="/about">About</Link>
            </li>
            <li onClick={handleShowMenu}>Admission</li>
            <li onClick={handleShowMenu}>
              <Link to="/programs">Programs</Link>
            </li>
            <li onClick={handleShowMenu}>Activities</li>
            {/* <li>Contact</li> */}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
