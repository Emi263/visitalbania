import React from "react";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

function Card({ image, description, title }) {
  return (
    <>
      <Paper
        elevation={2}
        sx={{ margin: "auto", maxWidth: "350px", p: "2rem" }}
      >
        <Stack spacing={1}>
          <Typography align="center" color="primary" variant="h4">
            {title}
          </Typography>
          <Image src={image} objectFit="contain" />
          <Typography align="center" variant="caption">
            {description}
          </Typography>
        </Stack>{" "}
      </Paper>
    </>
  );
}

export default Card;
