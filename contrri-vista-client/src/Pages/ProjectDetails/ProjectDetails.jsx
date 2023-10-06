import React from "react";
import Navbar2 from "../Shared/Navbar2/Navbar2";
import { Link } from "react-router-dom";

function ProjectDetails({
  project_name,
  project_url_external,
  geographic_scope,
  fields_of_science,
  project_status,
  keywords,
  project_description,
  project_image_url,
}) {
  return (
    <>
      <Navbar2 />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          className="mx-auto mt-8 p-6 bg-indigo-200 bg-opacity-80 rounded-lg shadow-lg"
          style={{ width: "85%" }}
        >
          <div className="project-details-container">
            <div className="project-details-header">
              <h1 className="project-name">
                NOAA NWS SKYWARN® Weather Spotter Program
              </h1>
            </div>
            <div className="project-details-info">
              <div className="project-info-left">
                <div className="project-image-container">
                  <img
                    src={project_image_url}
                    alt={project_name}
                    className="project-image"
                  />
                </div>
              </div>
              <div className="project-info-right">
                <p className="project-description">
                  SKYWARN® is a National Weather Service (NWS) program developed
                  in the 1960s that consists of trained weather spotters who
                  provide reports of severe and hazardous weather to help
                  meteorologists and emergency managers make life-saving warning
                  decisions. There are well over 300,000 active SKYWARN Weather
                  Spotters in the U.S. Spotters are concerned citizens, amateur
                  radio operators, truck drivers, mariners, airplane pilots,
                  emergency management personnel, and public safety officials
                  who volunteer their time and energy to report on hazardous
                  weather impacting their community. The first steps in becoming
                  an official NWS SKYWARN Weather Spotter is to complete
                  training on weather hazards and their reporting in your area.
                  Classroom type training is typically offered each Spring and
                  Fall. To find the next available training provided by your
                  local NWS forecast office please visit this interactive map:
                  http://www.nws.noaa.gov/skywarn/skywarn.htm In partnership
                  with the COMET® Program, which is part of the University
                  Corporation for Atmospheric Research&#39;s Community Programs
                  supplemental national web-based training was also created. For
                  more information please visit:
                  https://www.meted.ucar.edu/training_course.php?id=23
                </p>
                <p>
                  <span className="project-label">Status:</span>{" "}
                  <span className="project-value">Active</span>
                </p>
                <p>
                  <span className="project-label">Geographic Scope:</span>{" "}
                  <span className="project-value">National</span>
                </p>
                <p>
                  <span className="project-label">Fields of Science:</span>{" "}
                  <span className="project-value">Climate and weather</span>
                </p>
                <p className="project-keywords">
                  <span className="project-label">Keywords:</span>{" "}
                  <span className="project-value">
                    Skywarn, weather, spotter, flood, tornado, thunderstorm.
                    hurricane, typhoon, snow, ice, wind, damage, storm, NOAA,
                    NWS, training, meteorology
                  </span>
                </p>
              </div>
            </div>
          </div>

          <Link to="/participate">
            <button className="home-button1" style={{ marginRight: "0.5rem" }}>
              Contact Creator
            </button>
          </Link>
          <Link to="/participate">
            <button className="home-button2">Contribute</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProjectDetails;
