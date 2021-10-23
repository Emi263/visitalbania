import React from "react";
import Card from "./Card";
import Grid from "@mui/material/Grid";

import svg1 from "../../public/svg/svg1.png";
import svg2 from "../../public/svg/svg2.png";
import svg3 from "../../public/svg/svg3.png";

function CardList() {
  const cardData = [
    {
      title: "Visiting Albania soon?",
      img: svg1,
      description:
        "If you are wondering which places to visit in Albania and cannot find a good guide, do not worry. We got you!",
    },
    {
      title: "Visiting Albania soon?",
      img: svg2,
      description:
        "If you are wondering which places to visit in Albania and cannot find a good guide, do not worry. We got you!",
    },
    {
      title: "Visiting Albania soon?",
      img: svg3,
      description:
        "If you are wondering which places to visit in Albania and cannot find a good guide, do not worry. We got you!",
    },
  ];

  return (
    <Grid container spacing={3} sx={{ pt: "3rem" }}>
      {" "}
      {cardData.map(({ title, img, description }) => (
        <Grid item xs={12} md={6} lg={4}>
          {" "}
          <Card image={img} description={description} title={title} />
        </Grid>
      ))}
    </Grid>
  );
}

export default CardList;
