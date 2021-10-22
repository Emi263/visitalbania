import React from "react";
import Box from "@mui/material/Box";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import List from "@mui/material/List";
import ContactPageRoundedIcon from "@mui/icons-material/ContactPageRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";

import ListItemText from "@mui/material/ListItemText";
function DrawerContent({ setOpened }) {
  const data = [
    {
      text: "Explore",
      icon: <ExploreRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <ContactPageRoundedIcon />,
    },
    {
      text: "More",
      icon: <MoreHorizRoundedIcon />,
    },
    {
      text: "Contribute",
      icon: <AddCircleRoundedIcon />,
    },
  ];

  return (
    <Box sx={{ width: "200px", pt: "4rem" }}>
      <List>
        {data.map(({ text, icon }) => (
          <ListItemButton
            component="a"
            onClick={() => setOpened(false)}
            key={text}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}

export default DrawerContent;
