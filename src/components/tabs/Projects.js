import React from "react";
import data from "../projects_data/Projectsdata";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="container projects">
      <div className="row">
        {data.map((project, index) => {
          return <ProjectCard key={index} projects={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
