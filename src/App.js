import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <Sidebar />
          </div>

          <div className="col-lg-9 app_main_content">
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
