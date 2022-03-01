import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import Drop from "../itemDropdown"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import RouteNames from '../../router/routerNames';
import ButtonAppBar from '../Appbar1';
import ButtonAppBar1 from '../Appbar2';
import Pagination from '../Pagination';
import { useDispatch, useSelector } from 'react-redux';

// const isFavourite = () => (true);
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
    marginTop: "20px",
    // marginLeft:"30px"
  },
  filter: {
    width: "200px",
    height: "50px",
  },
  container: {
    // display:"none",
    // border: '1px solid black',
  },
  itemContainer: {
    // display:"none"
  },
  containerSelected: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    height: "600px",
    width: "100%",
  },
  containerSelectedUpper: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    height: "70px",
    width: "85%",
    border: "1px solid black",
  },
  containerSelectedLower: {
    display: "flex",
    height: "630px",
    width: "85%",
    border: "1px solid black",
  },
  containerSelectedLowerLeft: {
    height: "100%",
    width: "15%",
    border: "1px solid black",
  },
  containerSelectedLowerMiddle: {
    height: "100%",
    width: "40%",
    border: "1px solid black",
  },
  containerSelectedLowerRight: {
    height: "100%",
    width: "45%",
    border: "1px solid black",
  },
  pagination: {
    height: "40px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
}));


export default function BeerCard() {
  const dispatch = useDispatch();
  const [showPerPage, setShowPerPage] = useState(8);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start: any, end: any) => {
    setPagination({ start: start, end: end });
    // console.log(start, end);
  };
  const [category, setCategory] = useState("");
  const handleChange = (event: any) => {
    setCategory(event.target.value);
  };
  const pageSelect = (event: any) => {
    setShowPerPage(event.target.value);
  };

  const classes = useStyles();
  const naviagte = useNavigate();
  const { data, search } = useSelector((state: any) => state.productsReducer)

  useEffect(() => {
    let apiUrl = "https://fakestoreapi.com/products";
    if (category.length > 0 && category !== 'all') {
      apiUrl = `${apiUrl}/category/${category}`;
    }

    axios.get(apiUrl)
      .then((resp) => {
        if (resp.status === 200) {
          dispatch({ type: "UpdateProducts", payload: { data: resp.data } })
        }
      })
      .catch((err) => {
        console.log("err is", err)
      })
  }, [category])

  const getListData = () => {
    let listData = [...data];
    listData = listData.filter((a: any) => a.title.toLowerCase().includes(search.toLowerCase()));
    listData = listData.slice(pagination.start, pagination.end);
    return [...listData];
  }

  return (
    <div className={classes.container} >
      <ButtonAppBar />
      <ButtonAppBar1 />
      <div className={classes.itemContainer} >
        <div className={classes.top}>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Filter</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              className={classes.filter}
              value={category}
              label="Filter"
              onChange={handleChange}
            >
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={"jewelery"}>Jewelery</MenuItem>
              <MenuItem value={"men's clothing"}>Men's Clothing</MenuItem>
              <MenuItem value={"women's clothing"}>Women's Clothing</MenuItem>
              <MenuItem value={"electronics"}>Electrionics</MenuItem>
            </Select>
          </FormControl>
          <Typography align="center" variant="h6">
            52 PRODUCTS
          </Typography>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Show Per Page</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              className={classes.filter}
              value={showPerPage}
              label="Show Per Page"
              onChange={pageSelect}
            >
              <MenuItem value={"8"}>8</MenuItem>
              <MenuItem value={"12"}>12</MenuItem>
              <MenuItem value={"16"}>16</MenuItem>
              <MenuItem value={"20"}>20</MenuItem>
              <MenuItem value={"24"}>24</MenuItem>
            </Select>
          </FormControl>
          {/* <Drop /> */}
        </div>
        <div className={classes.cardContainer}>
          {getListData().map((item: any) => {
            return (
              <div key={item.id} onClick={() => { naviagte(`${RouteNames.SELECTED_ITEMS}/${item.id}`) }} >
                <Card className={classes.card}>
                  <div
                  // onMouseOver={() => setOver(true)}
                  // onMouseOut={() => setOver(false)}
                  >
                    {/* <img
    src={over ? Image1 : Image2}
    alt="arrow"
    className={classes.imgStyle}
  /> */}
                  </div>
                  <img className={classes.imgStyle} src={item.image} alt="" />
                  <CardContent>
                    <Typography gutterBottom align="center" component="h2">
                      {item.id}
                    </Typography>
                    <Typography component="p" className={classes.secondLine} align="center">
                      {item.title}
                    </Typography>
                    <Typography gutterBottom align="center" component="h2">
                      {item.price}
                    </Typography>
                    <Typography gutterBottom align="center" component="h2">
                      {item.category}
                    </Typography>
                  </CardContent>
                  <CardActions>
                  </CardActions>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.pagination} >
        {/* <LabelBottomNavigation /> */}
        <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          count={10}
        />
      </div>
    </div>
  );
}

