import React, { useEffect, useState } from "react";
import "../ProjectShowcase/ProjectShowcase.css"; // Import your CSS for styling
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Navbar2 from "../Shared/Navbar2/Navbar2";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import CardComponent from "./CardComponent";

import data from "./data.json";

const NasaProjects = () => {
  return (
    <>
      <Navbar2 />
      <div className="project-showcase">
        <div className="project-container">
          <a>filters</a>
          <a>keywords</a>

          <div className="search-bar">
            <input type="text" />
            <Link className="create" to="/createproject">
              Create <AddCircleIcon />{" "}
            </Link>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{ flexGrow: 1 }}
              style={{ marginTop: "2rem", maxWidth: "95%" }}
            >
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {data._project.map((item) => (
                  <CardComponent
                    key={item.project_id}
                    project_name={item.project_name}
                    project_url_external={item.project_url_external}
                    geographic_scope={item.geographic_scope}
                    fields_of_science={item.fields_of_science}
                    project_status={item.project_status}
                  />
                ))}
              </Grid>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default NasaProjects;
