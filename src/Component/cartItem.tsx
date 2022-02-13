import React, { useState } from "react";
import { IconButton, Drawer, Divider, Button } from "@mui/material";

import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Image1 from "../Images/1.png";
const CartItem = () => {
  const useStyles = makeStyles(() => ({
    beer: {
      "&.css-ahj2mt-MuiTypography-root": {
        color: "black",
        fontSize: "20px",
        fontWeight: "300",
        textAlign: "center",
      },
    },
    image: {
      height: "100px",
      width: "100px",
      marginTop: "-55px",
    },
    item: {
      display: "flex",
      justifyContent: "space-between",
      margin: "35px 20px 10px 20px ",
    },
    addRemove: {
      display: "flex",
      justifyContent: "space-between",
      border: "1px solid grey",
      width: "80px",
      height: "25px",
      marginLeft: "-120px",
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
    checkoutButton: {
      "&.css-sghohy-MuiButtonBase-root-MuiButton-root": {
        padding: "0.7rem 3rem",
        fontSize: "13px",
        textTransform: "uppercase",
        outline: "none",
        cursor: "pointer",
        backgroundColor: "black",
        color: "white",
        alignItems: "center",
        height: "42px",
        width: "392px",
        borderRadius: "50px",
        marginLeft: "30px",
        marginTop: "20px",
      },
    },
    subTotal: {
      display: "flex",
      justifyContent: "space-between",
      marginLeft: "20px",
      marginRight: "20px",
    },
    shippingTaxes:{
        "&.css-ahj2mt-MuiTypography-root":{
        width:"360px",
        textAlign:"center",
        marginLeft:"45px",
        fontWeight:"550",
        marginTop:"20px",
        fontSize:"14px",
    },
    totalText:{
        color:"red"
    }
}
  }));

  const classes = useStyles();
  return (
    <>
      <Typography className={classes.beer}>Beer Glass Tester Set</Typography>
      <div className={classes.item}>
        <img className={classes.image} src={Image1} />
        <div className={classes.addRemove}>
          <AddIcon />
          <Typography>1</Typography>
          <RemoveIcon />
        </div>
        <div>
          <Typography> $60</Typography>
        </div>
      </div>
      <div>
        <Divider className={classes.divider} />
        <div className={classes.subTotal}>
          <Typography >SUBTOTAL</Typography>
          <Typography>$360</Typography>
        </div>
        <Typography className={classes.shippingTaxes}>
          Shipping, taxes, and discount codes calculated at checkout.
        </Typography>
        <Button variant="contained" className={classes.checkoutButton}>
          Checkout
        </Button>
      </div>
    </>
  );
};

export default CartItem;
