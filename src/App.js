import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/left-sidebar/Sidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/tabs/About";
import Skills from "./components/tabs/Skills";
import Projects from "./components/tabs/Projects";
import Experience from "./components/tabs/Experience";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <Sidebar />
            </div>

            <div className="col-lg-9 app_main_content">
              <Navbar />
              <Route path="/" exact component={About} />
              <Route path="/skills" component={Skills} />
              <Route path="/projects" component={Projects} />
              <Route path="/experience" component={Experience} />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
