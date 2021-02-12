import React from "react";
import { motion } from "framer-motion";
import MotionEffect from "../MotionEffect";

const About = () => {
  return (
    <motion.div variants={MotionEffect} initial="hidden" animate="visible">
      <j2>About</j2>
    </motion.div>
  );
};

export default About;
