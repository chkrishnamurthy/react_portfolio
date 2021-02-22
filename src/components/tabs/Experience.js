import React, { useState, useEffect, useRef } from "react";
// import "./Experience.css";
import { motion } from "framer-motion";
import MotionEffect from "../../test/MotionEffect";
import "./Experience.css";
import VanillaTilt from "vanilla-tilt";

const Experience = () => {
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
    <motion.div
      variants={MotionEffect}
      initial="hidden"
      animate="visible"
      className="container exp"
    >
      <div className="row">
        <figure class="Experience">
          <figcaption>
            <h4>PROFESSIONAL EXPERIENCE</h4>
            <ul className="experience_ul">
              <li>
                Currently Working as Web Developer analyst with GOOGLE for
                chrome web store,
              </li>
              <li>
                Found number of threat related extensions, ex: Stealing Cookies,
                Stealing of personal identifiable information,coin
                mining,Malware etc.
              </li>
              <li>
                Responsible for finding obfuscated code which involves malicious
                activity
              </li>
              <li>
                Implemented no of Bookmarks for my team to increase performance
                within short time,
              </li>
              <li>
                Deep code dive of chrome extensions submitted by other
                developers.
              </li>
              <li>
                Responsible for finding abusive code which is used to generate
                malicious traffic.
              </li>
            </ul>
            <h4>ADDITIONAL APPLICATIONS</h4>
            <ul>
              <li>
                I have developed Google Chrome extensions and one of the major
                application i.e{" "}
                <a
                  className="getext"
                  href="https://chrome.google.com/webstore/detail/getext/dkcgooalhicnkfdiaejibmfjcgoiflfg"
                  target="_blank"
                >
                  GeText,{" "}
                </a>
                <i class="fa fa-google " aria-hidden="true"></i>
              </li>
              <li>
                {" "}
                Currently no of web developer people are utilizing this
                extension,
              </li>
              <li>
                Personally developed many React applications like chat
                application... add few more points
              </li>
            </ul>
          </figcaption>
        </figure>
        <div className="row2">
          <div
            className="col-lg-4 resume-card"
            ref={tilt}
            className="education_card js-tilt"
          >
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">EDUCATION</h4>
                <p class="card-text header">GRADUATION </p>
                <p class="card-text">
                  AV College of Arts, Science and Commerce College
                </p>
                <p class="card-text">
                  Bachelor of Computer Science 2013 - 2016
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
