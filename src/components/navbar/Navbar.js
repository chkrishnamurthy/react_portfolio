import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const NavButtonList = ["About", "Projects", "Resume"];
  const routingEntities = ["/", "projects", "resume"];

  const [activeID, setActiveID] = useState(0);
  const [NavButtons, setNavButtons] = useState(NavButtonList);

  const activeHandle = (index) => {
    setActiveID(index);
  };

  useEffect(() => {
    const currentUrl = window.location.href;
    if (currentUrl.endsWith("/")) {
      setActiveID(0);
    } else if (currentUrl.endsWith("/projects")) {
      setActiveID(1);
    } else {
      setActiveID(2);
    }
  });

  const activeClass = {
    color: "blue",
    transition: "all 0.6s",
  };

  return (
    <div className="navbar_main">
      <div className="col-5 navbar">
        {NavButtons.map((NavButton, index) => {
          console.log(index);
          return (
            <Link to={routingEntities[index]}>
              <div key={index} className="navbar_container teal borderYtoX">
                <a
                  style={activeID == index ? activeClass : null}
                  onClick={() => activeHandle(index)}
                >
                  {NavButton}
                </a>
              </div>
            </Link>
          );
        })}
        <div></div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
