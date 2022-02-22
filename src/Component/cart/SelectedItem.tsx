import Drawer from '@mui/material/Drawer';
import { makeStyles } from "@mui/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartItem from "./cartItem";
// import heart from "./heart.png"
import Counter from '../counter';
import { Divider, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import ButtonAppBar from '../Appbar1';
import ButtonAppBar1 from '../Appbar2';
import LabelBottomNavigation from '../Footer';

const useStyles = makeStyles(() => ({
    cardContainer: {
        display: "flex",
        flexWrap: "wrap",
        marginTop: "50px",
        width: "100%",
        margin: "10px",
        flexDirection: "row",
    },
    card: {
        width: 395,
        height: 500,
        margin: "10px",
    },
    smallimage: {
        height: "150px",
        width: "150px",
    },
    largeimage: {
        height: "500px",
        width: "500px",
    },
    imgStyle: {
        display: 'block',
        height: '300px',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: "10px",
        position: 'relative',
        width: "200px"
    },
    secondLine: {
        "&.css-1uwgr7b-MuiTypography-root": {
            fontWeight: "bold",
        }
    },
    btn: {
        float: "left",
        width: "120px",
        "&.css-1rwt2y5-MuiButtonBase-root-MuiButton-root": {
            borderRadius: "20px",
            border: "1px solid black",
            color: "black",
            display: "flex",
            justifyContent: "space-between",
            width: "120px",
            height: "43px"

        },
    },
    top: {
        display: "flex",
        justifyContent: "space-around",
        marginTop: "10px",
        height: "60px",
        alignItems: "center",
        // marginLeft:"30px"
    },
    filter: {
        width: "200px",
        height: "50px",
    },
    container: {
    },
    itemContainer: {
        // display:"none"
    },
    containerSelected: {

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        //   border:"1px solid black",
        height: "700px",
        width: "100%",
    },
    containerSelectedUpper: {
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        height: "70px",
        width: "85%",
    },
    containerSelectedLower: {
        display: "flex",
        height: "630px",
        width: "85%",
    },
    containerSelectedLowerLeft: {
        height: "100%",
        width: "15%",
        display: "flex",
        justifyContent: "left",
        flexDirection: "column",
        gap: "15px",
    },
    containerSelectedLowerMiddle: {
        height: "100%",
        width: "45%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    likebtncont: {
        height: "50px",
        width: "100%",
        display: "flex",
        justifyContent: "right",
        marginRight: "15px",
    },
    likebtn: {
        height: "45px",
        width: "45px",
    },
    containerSelectedLowerRight: {
        //   border:"1px solid black",  
        height: "100%",
        width: "40%",
        display: "flex",
        textAlign: "left",
        flexDirection: "column",
        margin: "0px 20px 0px 20px",
    },
    addcartbtn: {
        height: "50px",
        width: "100%",
        backgroundColor: "black",
        color: "white",
        fontWeight: "bold",
        fontSize: "20px",
        margin: "10px 0px 10px 0px",
        borderRadius: "25px",
        border: "1px solid black",
        "&:hover": {
            backgroundColor: "white",
            color: "black"
        },
    },
    buybtn: {
        height: "50px",
        width: "100%",
        backgroundColor: "White",
        color: "Black",
        fontWeight: "bold",
        fontSize: "20px",
        margin: "10px 0px 10px 0px",
        borderRadius: "25px",
        border: "1px solid black",
        "&:hover": {
            backgroundColor: "darkgray",
            color: "white"
        },
    },
    quantitybox: {
        height: "110px",
        width: "100px",
        // margin:"20px 0px 10px 0px",
    },
    qtypara: {
        margin: "5px"
    },
    hr: {
        height: "1px solid black",
        margin: "0px",
    },
    descbox: {
        height: "fit-content",
        width: "100%",
        border: "1px solid lightgray",
        boxSizing: "border-box",
        padding: "0px 10px 0px 10px"
    },
    cartitem: {
        display: "none",
        backgroundColor: "white",
        position: "absolute",
        top: "0px",
        right: "0px",
        height: "100%"
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
        '&.css-9mgopn-MuiDivider-root': {
            width: "410px",
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "20px",
            color: "black",
            height: "20px"
        },
    },
    cart: {
        "&.css-ahj2mt-MuiTypography-root": {
            fontSize: "26px",
            fontFamily: " sans-serif",
            fontWeight: "bold",
        },
    },
    topcont: {
        display: "flex",
        justifyContent: "space-between",
        marginLeft: "20px",
        marginRight: "20px",
        marginTop: "20px"
    }

}));
export default function SelectedItem() {
    const classes = useStyles();
    const { id } = useParams();
    const [data, setData] = useState<any>(null);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state: any) => state.cartReducer)

    const [openDrawer, setOpenDrawer] = React.useState<Boolean | any>(false);
    const onClose = (event: any) => {
        setOpenDrawer(false)
    };
    const addCart = () => {
        let oldData = [...cartItems];
        let find = oldData.findIndex(a => a.id === data.id);
        let dataToAdd = {};
        if (find > -1) {//item already exist & update quantity
            oldData[find]['quantity'] = oldData[find]['quantity'] + 1;
            dispatch({ type: "UpdateCart", payload: { cartItems: [...oldData] } });
        } else {//item does not exist and add item
            dataToAdd = { ...data, ...{ quantity } };
            dispatch({ type: "UpdateCart", payload: { cartItems: [...cartItems, ...[dataToAdd]] } })
        }
        setOpenDrawer(!openDrawer);
    }


    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    setData(resp.data);
                    // console.log(resp.data);
                }
            })
            .catch((err) => {
                console.log("err", err);
            })
    }, []);

    if (data === null) {
        return (
            <h1>{"loading.."}</h1>
        );
    }

    return (
        <div>
            <ButtonAppBar />
            <ButtonAppBar1 />
            <div className={classes.containerSelected} >
                <div className={classes.containerSelectedUpper} >
                    <h5>{`${data.category}${" >"}${data.title}`}</h5>
                </div>
                <div className={classes.containerSelectedLower} >
                    <div className={classes.containerSelectedLowerLeft}>
                        <img className={classes.smallimage} src={data.image}></img>
                        <img className={classes.smallimage} src={data.image}></img>
                        <img className={classes.smallimage} src={data.image}></img>
                    </div>
                    <div className={classes.containerSelectedLowerMiddle}>
                        <div className={classes.likebtncont} >
                            <img className={classes.likebtn} src="../heart.png" ></img>
                        </div>
                        <img className={classes.largeimage} src={data.image}></img>
                    </div>
                    <div className={classes.containerSelectedLowerRight}>
                        <h2>{data.title}</h2>
                        <h4>{`${"$"}${data.price}`}</h4>
                        <br />
                        <hr className={classes.hr} ></hr>
                        <div className={classes.quantitybox} >
                            <p className={classes.qtypara} >Quantity</p>
                            <Counter value={quantity} onChangeValue={(val: any) => setQuantity(val)} />
                        </div>
                        <button className={classes.addcartbtn} onClick={addCart}>ADD TO CART</button>
                        <button className={classes.buybtn} >BUY IT NOW</button>
                        <br />
                        <div className={classes.descbox}>
                            <h5>Description</h5>
                            <p>
                                {data.description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={classes.cartitem} >
                    <Drawer
                        anchor="right"
                        classes={{ paper: classes.drawerPaper }}
                        onClose={() => setOpenDrawer(false)}
                        open={openDrawer}
                    >
                        <div className={classes.topcont}>
                            <Typography className={classes.cart}>Cart</Typography>
                            <CloseIcon onClick={onClose} />
                        </div>
                        <Divider className={classes.divider} />
                        <CartItem />
                    </Drawer>
                </div>
            </div>
            {/* <LabelBottomNavigation /> */}
        </div>
    );
}