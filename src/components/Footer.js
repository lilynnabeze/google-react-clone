import React from "react";
import Leaf from "./images/leaf.png";

const FooterTop = () => {
  return (
    <div className="footer-top">
      <p className="location">Nigeria</p>
    </div>
  );
};

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <ul className="footer-left">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Advertising</a>
        </li>
        <li>
          <a href="#">Business</a>
        </li>
        <li>
          <a href="#">How Search Works</a>
        </li>
      </ul>
      <div className="leaf-container">
        <img src={Leaf} alt="Leaf" className="leaf" />
        <a href="#">Carbon neutral since 2007</a>
      </div>
      <ul className="footer-right">
        <li>
          <a href="#">Privacy</a>
        </li>
        <li>
          <a href="#">Terms</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <FooterTop />
      <FooterBottom />
    </div>
  );
};

export default Footer;
