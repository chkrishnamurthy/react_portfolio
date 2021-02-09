import React from "react";
import avatar from "../assets/icons2/avatar.jpg";
import { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

// import

const Sidebar = () => {
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
      <div className="sidebar_name">
        <p class="head-title">
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
        &#10084; Ful Stack Developer &#10084;
      </div>

      <div class="card js-tilt" ref={tilt}>
        <header>
          <div>Contact Info</div>
        </header>
        <div class="card__body">
          <h2>7396678358</h2>
          <h2>Hyderabad</h2>
          <div className="mail">
            <h1>chalapatikrishnamurthy@gmail.com</h1>
            <a href="#" onClick={handleEmailMe}>
              <i class="fa fa-pencil" aria-hidden="true"></i>
            </a>
          </div>
          <a href="#" download="#">
            <div className="buttonDownload">Download Resume</div>
          </a>
        </div>
      </div>

      <div></div>
      <div className="sidebar_social_icons">
        <ul>
          <li>
            <a href="#">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
