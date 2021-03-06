import React from "react";
import { auth } from "../firebase";
import "./header.css";

function Header({ setOpenSignIn, user }) {
  const scrollFun = () => {
    window.scroll(0, 0);
  };
  return (
    <>
      <div className="header">
        <div className="header__left">
          <h3 onClick={scrollFun}>Danish Jamal</h3>
        </div>
        <div className="header__right">
          <div className="header__right__links">
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
          {user ? (
            <button className="header__btn" onClick={() => auth.signOut()}>
              LOGOUT
            </button>
          ) : (
            <button className="header__btn" onClick={() => setOpenSignIn(true)}>
              ADMIN
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
