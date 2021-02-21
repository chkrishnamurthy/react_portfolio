import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import MotionEffect from "../MotionEffect";

const ProjectCard = ({ projects: { name, image, deploy_url, category } }) => {
  return (
    <motion.div
      variants={MotionEffect}
      initial="hidden"
      animate="visible"
      className="projectcard col-md-6 col-lg-4 my-2"
    >
      <div className="projectcard_wrapper">
        <a href={deploy_url} target="_blank">
          <img src={image} alt={name} className="projectcard_image" />
        </a>
        <div className="projectcard_title">Test1</div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
