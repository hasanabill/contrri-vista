import React from "react";
import "./ProjectShowcase.css"; // Import your CSS for styling
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CardComponent from "./Card";
import Navbar2 from "../Shared/Navbar2/Navbar2";

import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ProjectShowcase = () => {
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
          <Box sx={{ flexGrow: 1 }} style={{ marginTop: "2rem" }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={12} sm={6} md={3}>
                <CardComponent
                  title="Exploring the Martian Surface"
                  subheader="July 30, 2022"
                  ava="M"
                  color="#4CAF50"
                  img="https://scitechdaily.com/images/Multiple-Robots-NASA-Mars-Sample-Return-Mission-scaled.jpg"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <CardComponent
                  title="Journey to Jupiter's Moons"
                  subheader="March 15, 2021"
                  ava="J"
                  color="#E91E63"
                  img="https://www.k-state.edu/media/images/oct20/NASA-exploration-campaign.jpg"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <CardComponent
                  title="Studying the Rings of Saturn"
                  subheader="November 9, 2020"
                  ava="S"
                  color="#2196F3"
                  img="https://media2.spaceref.com/wp-content/uploads/2022/12/14114346/52561768616_13f76fc91d_k.jpg"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <CardComponent
                  title="New Horizons Beyond Pluto"
                  subheader="April 4, 2016"
                  ava="N"
                  color="#FF9800"
                  img="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/09/02/Pictures/night-stars-galaxy-mountains_52d2294c-ecb4-11ea-83c1-09a59be16170.jpg"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <CardComponent
                  title="Unveiling Secrets of the Sun"
                  subheader="February 22, 2023"
                  ava="S"
                  color="#673AB7"
                  img="https://images.newscientist.com/wp-content/uploads/2020/10/27211307/1-453915main_2010-3355_full-scaled.jpg?width=1200"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <CardComponent
                  title="Mission to the Asteroid Belt"
                  subheader="October 12, 2019"
                  ava="A"
                  color="#FF5722"
                  img="https://www.nasa.gov/sites/default/files/s132e012209_sm.jpg"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <CardComponent
                  title="Probing the Mysteries of Black Holes"
                  subheader="June 8, 2020"
                  ava="B"
                  color="#795548"
                  img="https://research.gatech.edu/sites/default/files/styles/news_first_image/public/news-images/22CLEVER_GRAPHIC_1%28300dpi%29_0.png?itok=iz8PA8N2"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <CardComponent
                  title="Adventures on the Red Planet"
                  subheader="September 3, 2021"
                  ava="R"
                  color="#009688"
                  img="https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202307/nuclear-rocket-270029-16x9.jpg?VersionId=scYxP9PaN2RaiXkjMpB42APIU1V5_a_Q"
                />
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
};

export default ProjectShowcase;
