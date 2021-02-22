import React, { useEffect, useState } from "react";
import MotionEffect from "../MotionEffect";
import data from "../projects_data/Projectsdata";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState(data);

  const filterCategory = (name) => {
    const newData = data.filter((project) => project.category.includes(name));
    console.log(newData);
    setProjects(newData);
  };

  return (
    <motion.div
      variants={MotionEffect}
      initial="hidden"
      animate="visible"
      className="container projects"
    >
      <div className="project_navbar">
        <div className="" onClick={() => setProjects(data)}>
          All
        </div>
        <div className="" onClick={() => filterCategory("react")}>
          ReactJS
        </div>
        <div className="" onClick={() => filterCategory("js")}>
          Javascript
        </div>
        <div className="" onClick={() => filterCategory("exn")}>
          Extenstions
        </div>
        <div className="" onClick={() => filterCategory("games")}>
          Games
        </div>
      </div>
      <div className="row">
        {projects.map((project, index) => {
          console.log(project.name);
          return <ProjectCard key={project.name} projects={project} />;
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
