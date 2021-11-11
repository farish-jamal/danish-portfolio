import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <p> Copyright © 2021-2022 | Danish Jamal</p>
      <div className="footer__links">
        <a href="https://farishjamal.online">
          <i className="fa fa-github" aria-hidden="true"></i>{" "}
        </a>
        <a href="/">
          <i
            className="fa fa-instagram"
            aria-hidden="true"
            style={{ color: "#8a3ab9" }}
          ></i>{" "}
        </a>
        <a href="/">
          <i
            className="fa fa-twitter"
            aria-hidden="true"
            style={{ color: "#0e76a8" }}
          ></i>{" "}
        </a>
        <a href="/">
          <i
            className="fa fa-linkedin"
            aria-hidden="true"
            style={{ color: "#4267B2" }}
          ></i>{" "}
        </a>
      </div>
    </div>
  );
}

export default Footer;
