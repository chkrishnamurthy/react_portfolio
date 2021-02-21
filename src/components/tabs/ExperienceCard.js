import React from "react";
// import "./Experience.css";
import { motion } from "framer-motion";
import MotionEffect from "../../test/MotionEffect";
import "./ExperienceCard.css";

const ExperienceCard = () => {
  return (
    <motion.div
      variants={MotionEffect}
      initial="hidden"
      animate="visible"
      className="container exp"
    >
      <div className="row">
        <figure class="snip1336">
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
                Working as Software Developer Associate to Develop and Debug a
                comprehensive Chrome Web Store Extensions from{" "}
                <i class="fa fa-google " aria-hidden="true"></i>
                Google(Internal Site)
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

export default ExperienceCard;
