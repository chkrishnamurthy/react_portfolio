import React from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/tabs/About";
import Resume from "./components/tabs/Resume";
import Projects from "./components/tabs/Projects";

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

              <Route path="/resume" component={Resume} />
              <Route path="/projects" component={Projects} />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
