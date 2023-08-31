import React from "react";
import "./Project.css";

const Project = () => {
  return (
    <div className="container">
      <h2 className="card2_heading">Projects</h2>
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="project">
            <div className="card2">
              <div className="tools">
                
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="project">
            <div className="card2">
              <div className="tools"></div>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="project">
            <div className="card2">
              <div className="tools"></div>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="project">
            <div className="card2">
              <div className="tools"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Project;

