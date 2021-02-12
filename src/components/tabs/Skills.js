import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";
import MotionEffect from "../MotionEffect";

const Skills = () => {
  return (
    <motion.div
      variants={MotionEffect}
      initial="hidden"
      animate="visible"
      className="container resume"
    >
      <div className="row">
        <div className="col-lg-4 resume-card">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Education</h4>
              <p class="card-text">Bachelor of Computer Science</p>
              <p class="card-text">AV College of Arts, Science and Commerce</p>
            </div>
          </div>
        </div>
        <div className="col-lg-8 resume-card">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Experience</h4>
              <p class="card-text">Accenture Solutions Limited</p>
              <p class="card-text">
                Currently working as a Web Developer Analyst in Accenture from
                Oct 11 2019 to till date.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div class="skills_container">
          <div class="col">
            <h2 class="titulo">Web</h2>
            <ul class="skill">
              <li>
                <span class="blueline html"></span>
                <em>HTML/CSS</em>
              </li>
              <li>
                <span class="blueline css"></span>
                <em>Javascript</em>
              </li>

              <li>
                <span class="blueline javascript"></span>
                <em>Bootstrap</em>
              </li>
              <li>
                <span class="blueline jquery"></span>
                <em>Debugging Skills</em>
              </li>
              <li>
                <span class="blueline jquery"></span>
                <em>jQuery</em>
              </li>
              <li>
                <span class="blueline php"></span>
                <em></em>
              </li>
            </ul>
          </div>
          <div class="col">
            <h2 class="plataformas titulo">FrameWorks</h2>
            <ul class="skill">
              <li>
                <span class="greenline wordpress"></span>
                <em>React JS</em>
              </li>
              <li>
                <span class="greenline prestashop"></span>
                <em>TypeScipt</em>
              </li>
            </ul>
          </div>
          <div class="col">
            <h2 class="programas titulo">BackEnd</h2>
            <ul class="skill">
              <li>
                <span class="redline dreamweaver"></span>
                <em>Node JS</em>
              </li>
              <li>
                <span class="redline illustrator"></span>
                <em>Mongo DB</em>
              </li>
              <li>
                <span class="redline photoshop"></span>
                <em>Socket.io</em>
              </li>
              <li>
                <span class="redline premiere"></span>
                <em>Ajax</em>
              </li>
              <li>
                <span class="redline flash"></span>
                <em>Express</em>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
