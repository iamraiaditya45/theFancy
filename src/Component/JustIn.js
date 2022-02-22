import React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CommitIcon from "@mui/icons-material/Commit";
import Drop from "./itemDropdown";
import { useState } from "react";
import Pagination from "./Pagination";
import Data from "../data1.json";
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
  cardDiv: {
    width: 500,
    height: 450,
    marginTop: "200px",
    marginLeft: "30px",
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
    height: "48px",
    backgroundColor: "white",
    fontWeight: "bold",
    padding: "13px",
    outline: "none",
  },
  top: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
    // marginLeft:"30px"
  },
}));

function BeerCard() {
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
        <button className={classes.btn}>
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
        {Data.slice(pagination.start, pagination.end).map((post,key) => (
          // <Card className={classes.card}>
          <div className={classes.cardDiv}>
            <div
              onMouseOver={() => setOver(true)}
              onMouseOut={() => setOver(false)}
            >
              <img
                src={post.image}
                //  src={over ? post.Image1 : post.Image2}
                className={classes.imgStyle}
                alt="1"
              />

              {/* <img
          src={over ? Image1 : Image2}
          alt="arrow"
          className={classes.imgStyle}
        /> */}
            </div>

            <CardContent>
              <Typography gutterBottom align="center" component="h2">
                {post.category}
              </Typography>
              <Typography
                component="p"
                className={classes.secondLine}
                align="center"
              >
                {post.title}
              </Typography>
              <Typography gutterBottom align="center" component="h2">
              ${post.price}
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
    </>
  );
}
export default BeerCard;
