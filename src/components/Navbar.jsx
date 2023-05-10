import React, { useState } from "react";
import "../styles/Navbar.css";
function Navbar({ setIsOpen, isOpen }) {
  const handleToggleClick = () => {
    setIsOpen(!isOpen);
  };
  const [theme, setTheme] = useState(false);
  return (
    <>
      <div className="navbar_container">
        <div className="logo">
          <img
            src="https://mycenta-dev.netlify.app/images/brand/logo/logo.png"
            alt=""
          />
        </div>
        <div className="big_menu">
          <div className="">
            <a>Explore</a>
            <p></p>
          </div>
        </div>
        <div className="navbar_search">
          <form>
            <button>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <input placeholder="Search for courses" type="text" />
          </form>
        </div>
        <div className="navbar_options">
          <ul>
            <li>Jobs</li>
            <li>Teaching Professionals Olympiad</li>
            <li>The Futture of Teaching</li>
          </ul>
        </div>
        <div className="theme_signin">
          <div
            onClick={() => setTheme(!theme)}
            className="darktheme_lighttheme"
          >
            {theme ? (
              <i style={{ fontSize: "2rem" }} class="fa-solid fa-sun"></i>
            ) : (
              <i style={{ fontSize: "2rem" }} class="fa-solid fa-moon"></i>
            )}
          </div>
          <button className="signin">
            Sign <br /> in
          </button>
        </div>
        <div className="toggle-container" onClick={handleToggleClick}>
          <div className={`line line-1 ${isOpen ? "open" : ""}`}></div>
          <div className={`line line-2 ${isOpen ? "open" : ""}`}></div>
          <div className={`line line-3 ${isOpen ? "open" : ""}`}></div>
        </div>
      </div>
      <div className={isOpen ? "navbar_menu navbar_menu_open" : "navbar_menu"}>
        <div>Jobs</div>
        <div>Teachimg Professionals Olympiard.</div>
        <div>The Future Of Teaching</div>
        <div className="navbar_menu_icons">
          {theme ? (
            <i style={{ fontSize: "2rem" }} class="fa-solid fa-sun"></i>
          ) : (
            <i style={{ fontSize: "2rem" }} class="fa-solid fa-moon"></i>
          )}
          <button className="signin">
            Sign <br /> in
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
