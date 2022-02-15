import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Image1 from "../Images/1.png";
import Image2 from "../Images/image2.jpg";
import Image3 from "../Images/image3.jpg";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CommitIcon from "@mui/icons-material/Commit";
import { Button } from "@mui/material";
import Drop from "./itemDropdown";
import { Box, Grid, Container } from "@mui/material";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import axios from "axios";
import Data from "../data1.json";
import Switch from '@mui/material/Switch';
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
// const isFavourite = () => (true);
const useStyles = makeStyles(() => ({
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "50px",
  },
  card: {
    width: 500,
    height: 600,
  },
  cardDiv:{
    width: 500,
    height: 450,
    marginTop:"200px",
    marginLeft:"30px",
  },
  imgStyle: {
    display: "block",
    height: "450px",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "-200px",
    position: "relative",
    width: "400px",
  },
  secondLine: {
    "&.css-1uwgr7b-MuiTypography-root": {
      fontWeight: "bold",
    },
  },
  btn: {
    float: "left",
    width: "120px",
      borderRadius: "20px",
      border: "1px solid grey",
      color: "black",
      display: "flex",
      justifyContent: "space-between",
      width: "120px",
      height: "43px",
      backgroundColor:"white",
      fontWeight:"bold",
      padding:"9px"
  },
  top: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
    // marginLeft:"30px"
  },
}));

function BeerCard() {
  const [darkState, setDarkState] = React.useState(false);
    const palletType = darkState ? "dark" : "light";
    const mainPrimaryColor = darkState ? "#FFFFFF" : "#000000";
    const mainSecondaryColor = darkState ? "#FFFFFF" : "#FFFFFF";
    const darkTheme = createTheme({
      palette: {
        type: palletType,
        primary: {
          main: mainPrimaryColor
        },
        secondary: {
          main: mainSecondaryColor
        }
      }
    });
  
    const handleThemeChange = () => {
      setDarkState(!darkState);
    };
  const [showPerPage, setShowPerPage] = useState(3);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
    console.log(start, end);
  };

  const classes = useStyles();
  const [over, setOver] = React.useState(false);
  return (
    <>
    
      <div className={classes.top}>
        <button  className={classes.btn}>
          <CommitIcon />
          <Typography align="center" component="h2">
            FILTER
          </Typography>
        </button>
        <Typography align="center" variant="h6">
          52 PRODUCTS
        </Typography>
        <Drop />
      </div>
      <div className={classes.cardContainer}>
      {Data.slice(pagination.start, pagination.end).map((post) => (
          // <Card className={classes.card}>
          <div className={classes.cardDiv}>
            <div
              onMouseOver={() => setOver(true)}
              onMouseOut={() => setOver(false)}
            >
              <img
                src={post.image}
                // src={over ? Image1 : Image2}
                className={classes.imgStyle}
                alt="image"
              />

              {/* <img
          src={over ? Image1 : Image2}
          alt="arrow"
          className={classes.imgStyle}
        /> */}
            </div>

            {/* <img className={classes.imgStyle} src={Image1} /> */}

            <CardContent>
              <Typography gutterBottom align="center" component="h2">
                MISSETE
              </Typography>
              <Typography
                component="p"
                className={classes.secondLine}
                align="center"
              >
                Napkins in Natural-Hand Marbled Fringe
              </Typography>
              <Typography gutterBottom align="center" component="h2">
                $30
              </Typography>
            </CardContent>
            <CardActions></CardActions>
            </div>
      ))}
              </div>
      <Pagination
        showPerPage={showPerPage}
        onPaginationChange={onPaginationChange}
        count={10}
      />
      {/* <Card className={classes.card}>
    <img className={classes.imgStyle} src={Image2}  />
    
                <CardContent>
          <Typography gutterBottom align="center"  component="h2">
            MISSETE
          </Typography>
          <Typography component="p" className={classes.secondLine} align="center">
            Napkins in Natural-Hand Marbled Fringe
          </Typography>
          <Typography gutterBottom align="center"  component="h2">
            $30
          </Typography>
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
      <Card className={classes.card}>
    <img className={classes.imgStyle} src={Image1} />
                <CardContent>
          <Typography gutterBottom align="center"  component="h2">
            MISSETE
          </Typography>
          <Typography component="p" className={classes.secondLine} align="center">
            Napkins in Natural-Hand Marbled Fringe
          </Typography>
          <Typography gutterBottom align="center"  component="h2">
            $30
          </Typography>
        </CardContent>
        <CardActions>
        </CardActions>
      </Card> */}
    </>
  );
}
export default BeerCard;
