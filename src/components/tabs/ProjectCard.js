import React from "react";
import "./Projects.css";

const ProjectCard = ({ projects: { name, image, deploy_url, category } }) => {
  return (
    <div className="projectcard col-md-6 col-lg-4">
      <div className="projectcard_wrapper">
        <a href={deploy_url} target="_blank">
          <img src={image} alt={name} className="projectcard_image" />
        </a>
        <div className="projectcard_title">Test1</div>
      </div>
    </div>
  );
};

export default ProjectCard;
