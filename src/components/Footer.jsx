import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <a className="navbar-brand" to="/">
          EDEN
        </a>
        <div className="footer-links">
          <h5 className="text1">
            <span> © 2021 Codevise Solutions |</span>
            <span href=""> Helpdesk </span>
          </h5>
        </div>
        <div className="footer-links">
          <h5 className="text1">
            <span href=""> Legal Notice </span>
          </h5>
          <h5 className="text1">
            <span href=""> | Terms & Conditions | </span>
          </h5>
          <h5 className="text1">
            <span href=""> Privcy </span>
          </h5>
        </div>
      </div>
    </>
  );
};

export default Footer;
