import React from "react";
import Rating from "@mui/material/Rating";
import { Box } from "@mui/material";

const StarRating = ({ rating }) => {
  return (
    <Box component="fieldset" borderColor="transparent">
      <Rating
        name="rating"
        value={rating}
        precision={0.5} // You can adjust precision as needed (e.g., 0.5 for half stars)
        readOnly
      />
    </Box>
  );
};

export default StarRating;
