import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="container resume">
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card_heading">Education</h4>

          <div className="resume-card_body">
            <h5 className="resume-card_title"> Computer Science</h5>
            <p className="resume-card_name">Acadamic details</p>
            <p className="resume-car_details">krishnanjkdsnckjjjjjjj</p>
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card_heading">Experience</h4>

          <div className="resume-card_body">
            <h5 className="resume-card_title"> Google</h5>
            <p className="resume-card_name">Accenture</p>
            <p className="resume-car_details">krishnanjkdsnckjjjjjjj</p>
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
                <em>HTML</em>
              </li>
              <li>
                <span class="blueline css"></span>
                <em>CSS</em>
              </li>
              <li>
                <span class="blueline php"></span>
                <em>PHP</em>
              </li>
              <li>
                <span class="blueline javascript"></span>
                <em>Javascript</em>
              </li>
              <li>
                <span class="blueline jquery"></span>
                <em>jQuery</em>
              </li>
            </ul>
          </div>
          <div class="col">
            <h2 class="plataformas titulo">FrameWorks</h2>
            <ul class="skill">
              <li>
                <span class="greenline wordpress"></span>
                <em>Wordpress</em>
              </li>
              <li>
                <span class="greenline prestashop"></span>
                <em>Prestashop</em>
              </li>
              <li>
                <span class="greenline joomla"></span>
                <em>Joomla</em>
              </li>
              <li>
                <span class="greenline blogger"></span>
                <em>Blogger</em>
              </li>
              <li>
                <span class="greenline tridion"></span>
                <em>Tridion</em>
              </li>
            </ul>
          </div>
          <div class="col">
            <h2 class="programas titulo">BackEnd</h2>
            <ul class="skill">
              <li>
                <span class="redline dreamweaver"></span>
                <em>Dreamweaver</em>
              </li>
              <li>
                <span class="redline illustrator"></span>
                <em>Illustrator</em>
              </li>
              <li>
                <span class="redline photoshop"></span>
                <em>Photoshop</em>
              </li>
              <li>
                <span class="redline premiere"></span>
                <em>Premiere</em>
              </li>
              <li>
                <span class="redline flash"></span>
                <em>Flash</em>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
