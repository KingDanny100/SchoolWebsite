import React from "react";
import "./Footer.css";
import {
  FacebookRounded,
  Instagram,
  Twitter,
  YouTube,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="footer_container">
      <section className="media_icons">
        <FacebookRounded sx={{ fontSize: 30 }} />{" "}
        <Instagram sx={{ fontSize: 30 }} /> 
        <Twitter sx={{ fontSize: 30 }} />{" "}
        <YouTube sx={{ fontSize: 30 }} />
      </section>
      <p>Copyright 2024 VISION ACADEMY</p>
    </footer>
  );
};

export default Footer;
