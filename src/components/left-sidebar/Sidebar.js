import React, { useState, useEffect, useRef } from "react";
import avatar from "../../assets/icons2/avatar.jpg";
import VanillaTilt from "vanilla-tilt";
import "./Sidebar.css";

// import
const getTheme = () => {
  let theme = "dark-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const Sidebar = () => {
  const [theme, setTheme] = useState(getTheme());

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleEmailMe = () => {
    window.open("mailto:chalapatikrishnamurthy@gmail.com");
  };
  const options = {
    max: 50,
    speed: 600,
    scale: 1.04,
    transition: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    perspective: 600,
  };
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return (
    <div className="sidebar">
      <img src={avatar} alt="" className="sidebar_avatar" />

      {/*<div class="toggle_switch">
        <input type="checkbox" class="switch_3" onClick={toggleTheme} />
        <svg
          class="checkbox"
          xmlns="http://www.w3.org/2000/svg"
          // style="isolation:isolate"
          viewBox="0 0 168 80"
        >
          <path
            class="outer-ring"
            d="M41.534 9h88.932c17.51 0 31.724 13.658 31.724 30.482 0 16.823-14.215 30.48-31.724 30.48H41.534c-17.51 0-31.724-13.657-31.724-30.48C9.81 22.658 24.025 9 41.534 9z"
            fill="none"
            stroke="#233043"  
            stroke-width="3"
            stroke-linecap="square"
            stroke-miterlimit="3"
          />
          <path
            class="is_checked"
            d="M17 39.482c0-12.694 10.306-23 23-23s23 10.306 23 23-10.306 23-23 23-23-10.306-23-23z"
          />
          <path
            class="is_unchecked"
            d="M132.77 22.348c7.705 10.695 5.286 25.617-5.417 33.327-2.567 1.85-5.38 3.116-8.288 3.812 7.977 5.03 18.54 5.024 26.668-.83 10.695-7.706 13.122-22.634 5.418-33.33-5.855-8.127-15.88-11.474-25.04-9.23 2.538 1.582 4.806 3.676 6.66 6.25z"
          />
        </svg>
      </div> */}

      <div className="sidebar_name">
        <p className="head-title">
          <span data-text="K">K</span>
          <span data-text="R">R</span>
          <span data-text="I">I</span>
          <span data-text="S">S</span>
          <span data-text="H">H</span>
          <span data-text="N">N</span>
          <span data-text="A">A</span>
          <span></span>
          <span data-text="M">M</span>
          <span data-text="U">U</span>
          <span data-text="R">R</span>
          <span data-text="T">T</span>
          <span data-text="H">H</span>
          <span data-text="Y">Y</span>
        </p>
      </div>
      <div className="sidebar_item sidebar_role">
        &#10084; FrondEnd Developer &#10084;
      </div>

      <div className="profile_card js-tilt" ref={tilt}>
        <header>
          <div className="card_title">Contact Info</div>
        </header>
        <div className="card__body">
          <h1>7396678358</h1>
          <h1>Hyderabad</h1>
          <div className="mail">
            <h1>chalapatikrishnamurthy@gmail.com</h1>
            <a href="/#" onClick={handleEmailMe}>
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </a>
          </div>
          <a href="/#" download="#">
            <div className="buttonDownload">Download Resume</div>
          </a>
        </div>
      </div>

      <div></div>
      <div className="sidebar_social_icons">
        <ul>
          <li>
            <a href="/#">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="/#">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="/#">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="/#">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
