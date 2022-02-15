import React from "react";
import Navbar from "./Appbar2";
import { makeStyles } from "@mui/styles";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "white",
    width: 800,
    margin: 100,
    marginTop: 170,
    marginLeft: 350,
    borderRadius: 30,
    boxShadow: "0 0 4px grey",
    padding: 20,
  },
  subCard: {
    backgroundColor: "white",
    height: 140,
    width: 800,
    marginTop: 50,
    boxShadow: "0 0 2px grey",
    border: "none",
    display: "flex",
    justifyContent: "space-around",
  },
  heading: {
    padding: 25,
  },
  imgCart: {
    height: "80%",
    width: "15%",
    padding: 15,
    paddingTop: 15,
  },
  weight: {
    color: "grey",
  },
  item: {
    width: 100,
  },
  cancelBtn: {
    marginTop: 55,
  },
  cartItem: {
    marginTop: 25,
  },
  quantity: {
    marginTop: 60,
    display: "flex",
  },
  price: {
    marginTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  addIcon: {
    height: 20,
    width: 20,
    backgroundColor: "#f6f6f6",
    border: "1px solid black",
    paddingBottom: 4,
    paddingRight: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  total: {
    float: "right",
    marginTop: 30,
    fontSize: 30,
    fontWeight: "bold",
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
const Cart = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.card}>
        <div className={classes.top}>
          <div className={classes.total}>
            Total Cart Value
            <div>$xyz</div>
          </div>
        </div>
        <div>
          <div className={classes.subCard}>
            <div className={classes.cartItem}></div>
            <div className={classes.quantity}>
              <div className={classes.addIcon}></div>
              <div className={classes.addIcon}>
                <AddOutlinedIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
