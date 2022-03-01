import React, { useEffect, useState } from "react";
import { Divider, Button } from "@mui/material";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Counter from "../counter";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import firebase from "firebase/compat/app";
import 'firebase/database'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

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
    height: "80px",
    width: "80px",
    marginTop: "-55px",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    margin: "35px 20px 10px 20px ",
    alignItems: "center",
  },
  addRemove: {
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid grey",
    width: "80px",
    height: "25px",
    marginLeft: "-120px",
  },
  uppercont: {
    height: "150px",
    display: "flex",
    flexDirection: "column",
    marginBottom: "10px",
    position: "sticky",
  },
  itemscont: {
    height: "800px",
    overflow: "hidden",
    overflowY: "scroll"

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
  cartfooter: {
    position: "fixed",
    bottom: "10px",
  },
  subTotal: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "20px",
    marginRight: "20px",
  },
  shippingTaxes: {
    "&.css-ahj2mt-MuiTypography-root": {
      width: "360px",
      textAlign: "center",
      marginLeft: "45px",
      fontWeight: "550",
      marginTop: "20px",
      fontSize: "14px",
    },
    totalText: {
      color: "red"
    }
  }
}));

const CartItem = () => {
  const { cartItems } = useSelector((state: any) => state.cartReducer);
  const dispatch = useDispatch();
  const [cartDataToShow, SetCartdataToShow] = useState();

  const classes = useStyles();

  const getTotal = () => {
    let { totalAmount } = cartItems.reduce((accum: any, currval: any) => {
      let { price, quantity } = currval;
      accum.totalAmount += price * quantity;
      return accum;
    }, { totalAmount: 0 });
    return totalAmount.toFixed(2);
  }
  const updateQuantity = (val: number, index: number) => {
    let oldData = [...cartItems]
    oldData[index]["quantity"] = val;
    dispatch({ type: "UpdateCart", payload: { cartItems: [...oldData] } })
  }

  const dataToSend = () => {
    let apiurl = "https://thefancy-3e4f8-default-rtdb.firebaseio.com/User Cart Data";
    let uid = localStorage.getItem("uid");
    console.log("uid is", uid)
    if (localStorage?.uid) {
      apiurl = `${apiurl}/${uid}.json`;
    }
    console.log("button clicked and function called")
    axios.post(apiurl, cartItems)
      .then((resp) => {
        if (resp.status === 200) {
          console.log("Data Saved Successfully")
        }
      })
      .catch((err) => {
        console.log("Data Error")
      })

    // if (localStorage?.uid) {
    //   firebase.database().ref(`${"User Cart Data"}/${uid}`).push(cartItems).catch(alert);
    // }
  }

  useEffect(() => {
    let apiurl = "https://thefancy-3e4f8-default-rtdb.firebaseio.com";
    let uid = localStorage.getItem("uid");
    if (localStorage?.uid) {
      apiurl = `${apiurl}/${"User Cart Data"}/${uid}.json`;
    }
    axios.get(apiurl)
      .then((resp) => {
        if (resp.status === 200) {
          console.log("user data fetched is ", resp)
          console.log("Cart Data To Show", resp.data)
        }
      })
      .catch((err) => {
        console.log("error is ", err)
      })
  }, [])

  return (
    <>
      <div className={classes.itemscont}>
        {cartItems.map((item: any, index: number) => {
          return (
            <div key={item.id} className={classes.uppercont} >
              <Typography className={classes.beer}>{item.title}</Typography>
              <br />
              <div className={classes.item}>
                <img className={classes.image} src={item.image} />
                <div  >
                  <Counter value={item.quantity} onChangeValue={(val: any) => updateQuantity(val, index)} />
                </div>
                <div>
                  <Typography>{`${"$"}${(item.quantity * item.price).toFixed(2)}`}</Typography>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={classes.cartfooter}>
        <Divider className={classes.divider} />
        <div className={classes.subTotal}>
          <Typography >{"SubTotal"}</Typography>
          <Typography>{`${"$"}${getTotal()}`}</Typography>
        </div>
        <Typography className={classes.shippingTaxes}>
          Shipping, taxes, and discount codes calculated at checkout.
        </Typography>
        <Button variant="contained" className={classes.checkoutButton} onClick={dataToSend} >Send data to Firebase</Button>
        <Button variant="contained" className={classes.checkoutButton}>
          Checkout
        </Button>
      </div>
    </>
  );
};

export default CartItem;
