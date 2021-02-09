import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const NavButtonList = ["About", "Projects", "Resume"];
  const [activeID, setActiveID] = useState(0);
  const [NavButtons, setNavButtons] = useState(NavButtonList);

  const activeClass = {
    color: "blue",
    transition: "all 0.6s",
  };

  return (
    <div className="col-5 navbar">
      {NavButtons.map((NavButton, index) => {
        console.log(index);
        return (
          <div key={index} className="navbar_container teal borderYtoX">
            <a
              style={activeID == index ? activeClass : null}
              onClick={() => setActiveID(index)}
            >
              {NavButton}
            </a>
          </div>
        );
      })}
      <hr />
    </div>
  );
};

export default Navbar;
