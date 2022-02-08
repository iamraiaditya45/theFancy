import React, { useState } from "react";
import { IconButton, Drawer } from "@mui/material";

import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";

const DrawerComponent = () => {
  const useStyles = makeStyles(() => ({
    appbar: {
      backgroundColor: "#f6f6f6",
      "&.css-11b3ww9-MuiPaper-root-MuiAppBar-root": {
        display: "flex",
        backgroundColor: "#f6fcff",
        boxShadow: "0 0 0 0",
        position: "static",
      },
    },
    drawerPaper: {
      width: "450px",
      zIndex: 0,

      '&."MuiPaper-root MuiDrawer-paper makeStyles-drawerPaper-91 MuiDrawer-paperAnchorRight MuiPaper-elevation16" ':
        {
          backgroundColor: "red",
          border: "none",
          padding: "0px",
        },
    },
  }));

  const [openDrawer, setOpenDrawer] = useState(false);

  const classes = useStyles();
  return (
    <>
      <Drawer
        anchor="right"
        classes={{ paper: classes.drawerPaper }}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        // onOpen={() => setOpenDrawer(true)}>
      >
        <Toolbar />

        <Typography>Engine</Typography>
      </Drawer>
      <Toolbar>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
          <WorkOutlineOutlinedIcon />
        </IconButton>
      </Toolbar>
    </>
  );
};

export default DrawerComponent;
