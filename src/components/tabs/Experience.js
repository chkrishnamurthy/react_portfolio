import React from "react";
import "./Experience.css";
import { motion } from "framer-motion";
import MotionEffect from "../MotionEffect";

const Experience = () => {
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
    </motion.div>
  );
};

export default Experience;
