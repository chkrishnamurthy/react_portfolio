import React from "react";
import { motion } from "framer-motion";
import MotionEffect from "../MotionEffect";
import "./About.css";

const About = () => {
  return (
    <motion.div
      variants={MotionEffect}
      initial="hidden"
      animate="visible"
      className="container"
    >
      <div className="row">
        <div className="about_me">
          <i class="fa fa-hand-o-right" aria-hidden="true"></i>{" "}
          <span> &nbsp; &nbsp;</span>
          <h3>About Me</h3>
        </div>

        <figure class="snip1336">
          <figcaption>
            <p>
              Hi, my name is Krishna Murthy,I'm 24 years old and I'm a Web
              Developer. I <i class="fa fa-heart" aria-hidden="true"></i>
              &nbsp;to code front-end projects, always looking for innovative
              ways to create, with less code and all good practices...!
            </p>
            <h3>Key skills include:</h3>
            <ul>
              <li>Proficient in HTML, CSS, Server-Scripting,React JS</li>
              <li>Expertise in Debugging Applications</li>
              <li>will add</li>
            </ul>
            <h4>Professional Experience</h4>
            <ul>
              <li>
                Working as Software Developer Associate to Develop and Debug a
                comprehensive Chrome Web Store Extensions from{" "}
                <i class="fa fa-google " aria-hidden="true"></i>
                Google(Internal Site) from Oct 11 2019 to till date.
              </li>
              <li>will add</li>
            </ul>
            <h4>Hobbies</h4>
            <ul>
              <li>Reading Novels(fiction and Non fiction)</li>
              <li>Learning New technogies</li>
            </ul>
          </figcaption>
        </figure>
      </div>
    </motion.div>
  );
};

export default About;
