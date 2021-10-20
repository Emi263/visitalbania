import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Typography from "@mui/material/Typography";
import DrawerContent from "./DrawerContent";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";

function Main() {
  const [opened, setOpened] = useState(false);
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setOpened(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Visit Albania
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Drawer open={opened} anchor="left" onClose={() => setOpened(false)}>
        <DrawerContent setOpened={setOpened} />
      </Drawer>

      <div style={{ background: "red", height: "3000px" }}></div>
      <span id="id">sadsad</span>
    </Box>
  );
}

export default Main;
