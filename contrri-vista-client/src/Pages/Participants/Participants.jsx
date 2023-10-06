import React from "react";
import Navbar2 from "../Shared/Navbar2/Navbar2";
import { Link } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ProfileCard from "../ProfileCard/ProfileCard";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

function Participants() {
  return (
    <>
      <Navbar2 />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="project-container">
          <a>filters</a>
          <a>keywords</a>

          <div className="search-bar">
            <input type="text" />
            <Link className="create" to="/createproject">
              Create <AddCircleIcon />{" "}
            </Link>
          </div>
          <Box
            sx={{ flexGrow: 1 }}
            style={{
              marginTop: "2rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <ProfileCard
                imgUrl={
                  "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTTsTT77IEj6pGincOnZJWrd1TtsC8NmUlFNy9_6gcslaoXAE4q"
                }
              />
              <ProfileCard
                imgUrl={
                  "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS0vX8ewzpIBQn2MXiHIWfmVRIsLantXTp6M1vaD7z0mL5Pl6vk"
                }
              />
              <ProfileCard
                imgUrl={
                  "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT7DQkcxkDOIh8OPxFh-qDILTxYLz-Rr3uXwFSnGeyNsn4MCn8T"
                }
              />
              <ProfileCard
                imgUrl={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_rVSdjsLEhFvpBsrx1m3Nf7TIlXznkjkxQ0b_-_VU7rkZLUVg"
                }
              />
              <ProfileCard
                imgUrl={
                  "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSB7xrg7DMyH-WIeK1mQeLKxg-QstN0mCassiy57VKngtT7Nvw9"
                }
              />
              <ProfileCard
                imgUrl={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1nBozMkUeeldt1tRLTkeDVZ3G1oYhQPni6aCqNal6EAUK4jpR"
                }
              />
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
}

export default Participants;
