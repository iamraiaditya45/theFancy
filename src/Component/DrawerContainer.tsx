import React, { useState } from "react";
import { IconButton, Drawer, Divider } from "@mui/material";

import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import CloseIcon from "@mui/icons-material/Close";
import CartItem from "./cartItem";
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
    divider: {
      "&.css-9mgopn-MuiDivider-root": {
        width: "410px",
        marginTop: "10px",
        marginBottom: "10px",
        marginLeft: "20px",
        color: "black",
        height: "10px",
      },
    },
    top: {
      display: "flex",
      justifyContent: "space-between",
      marginLeft: "20px",
      marginRight: "20px",
    },
    cart: {
      "&.css-ahj2mt-MuiTypography-root": {
        fontSize: "26px",
        fontFamily: " sans-serif",
        fontWeight: "bold",
      },
    },
  }));

  const [openDrawer, setOpenDrawer] = useState(false);
  const onClose = (event: any) => {
    setOpenDrawer(false);
  };
  const classes = useStyles();
  return (
    <>
      <Drawer
        anchor="right"
        classes={{ paper: classes.drawerPaper }}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
      >
        <Toolbar />
        <div className={classes.top}>
          <Typography className={classes.cart}>Cart</Typography>
          <CloseIcon onClick={onClose} />
        </div>
        <Divider className={classes.divider} />
        <CartItem />
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
