import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer section" id="#footer">
      <div className="footer_container container">
        <h1 className="footer_title">Smith</h1>

        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer_link">
              Projects
            </a>
          </li>
          <li>
            <a href="#services" className="footer_link">
              Services
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a
            href="https://github.com/"
            className="footer_social-link"
            translate="_blank"
          >
            <i class="bx bxl-github"></i>
          </a>

          <a
            href="https://linkedin.com/"
            className="footer_social-link"
            translate="_blank"
          >
            <i class="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://facebook.com/"
            className="footer_social-link"
            translate="_blank"
          >
            <i class="bx bxl-facebook"></i>
          </a>
        </div>
        <span className="footer_copy">&#169; Marfat. All right reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
