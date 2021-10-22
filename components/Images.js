import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Img1 from "../public/images/img1.jpg";
import Img2 from "../public/images/img2.jpg";
import Img3 from "../public/images/img3.jpg";
import Img4 from "../public/images/img4.jpg";
import Img5 from "../public/images/img5.jpg";
import Img6 from "../public/images/img6.jpg";
import Img7 from "../public/images/img7.jpg";
import Img8 from "../public/images/img8.jpg";
import Img9 from "../public/images/img9.jpg";
import Img10 from "../public/images/img10.jpg";
import Img11 from "../public/images/img11.jpg";
import Img13 from "../public/images/img13.jpg";
import Img14 from "../public/images/img14.jpg";
import Img15 from "../public/images/img15.jpg";
import Img16 from "../public/images/img16.jpg";
import Image from "next/image";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import useMediaQuery from "@mui/material/useMediaQuery";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

function Images() {
  const [current, setCurrent] = useState(1);

  const handlePagination = () => {};

  const itemData = [
    {
      img: Img1,
      caption: "Osum Canyon Rafting",
      type: "Adventure",
    },
    {
      img: Img2,
      caption: " Albanian Alps",
      type: "Freedom",
    },
    {
      img: Img3,
      caption: "River Drin",
      type: "Lively",
    },
    {
      img: Img4,
      caption: "Kruja",
      type: "Resistance",
    },

    {
      img: Img5,
      caption: "Mangalem/Berat",
      type: "Uniformity",
    },
    {
      img: Img6,
      caption: "Saranda Beaches",
      type: "Pleasure",
    },
    {
      img: Img7,
      caption: "Health tourism",
      type: "Healthy",
    },
    {
      img: Img8,
      caption: "Old Bridge",
      type: "History",
    },
    {
      img: Img9,
      caption: "Gjirokaster",
      type: "Tradition",
    },
    {
      img: Img10,
      caption: "River",
      type: "Continuous",
    },
    {
      img: Img11,
      caption: "Osum Canyon Rafting",
      type: "Adventure",
    },
    {
      img: Img13,
      caption: "Osum Canyon Rafting",
      type: "Adventure",
    },
    {
      img: Img14,
      caption: "Osum Canyon Rafting",
      type: "Adventure",
    },
    {
      img: Img15,
      caption: "Osum Canyon Rafting",
      type: "Adventure",
    },
    {
      img: Img16,
      caption: "Osum Canyon Rafting",
      type: "Adventure",
    },
    {
      img: Img1,
      caption: "Osum Canyon Rafting",
      type: "Adventure",
    },
    {
      img: Img2,
      caption: " Albanian Alps",
      type: "Freedom",
    },
    {
      img: Img3,
      caption: "River Drin",
      type: "Lively",
    },
  ];
  const mobile = useMediaQuery("(max-width: 600px)");
  const laptop = useMediaQuery("(max-width: 1000px)");
  return (
    <div>
      <ImageList
        sx={{
          width: "90%",
          height: mobile ? "auto" : laptop ? "450px" : "700px",
          m: " auto",
          mt: "2rem",
        }}
        variant="masonry"
        cols={mobile ? 1 : 3}
        gap={10}
      >
        {itemData.slice(current * 6 - 6, current * 6).map((item) => (
          <ImageListItem className="img" key={item.img}>
            <Image src={item.img} />
            <ImageListItemBar title={item.type} subtitle={item.caption} />
          </ImageListItem>
        ))}
      </ImageList>

      <Container sx={{ display: "grid", placeContent: "center", pt: "0.5rem" }}>
        <Stack spacing={2} sx={{ margin: "auto" }}>
          <Pagination
            page={current}
            count={3}
            color="primary"
            onChange={(e, page) => {
              setCurrent(page);
            }}
          />
        </Stack>{" "}
      </Container>
    </div>
  );
}

export default Images;
