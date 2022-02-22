import React,{ useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import SearchIcon from "@mui/icons-material/Search";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import { Divider } from "@mui/material";
import CartItem from "./cartItem";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Data from "../data1.json";
import Just from "./JustIn";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  mainContainers: {
    height: "145px",
    boxShadow: "0px 0px 0px 0px",
    "&.css-hip9hq-MuiPaper-root-MuiAppBar-root": {
      marginTop: "0px",
      backgroundColor: "black",
      boxShadow: "0px 0px 0px 0px",
    },
  },
  free: {
    marginTop: "10px",
    "&.css-2ulfj5-MuiTypography-root": {
      marginTop: "12px",
      fontSize: "40px",
      marginLeft: "480px",
      marginRight: "450px",
      fontFamily: "serif",
      fontWeight: "bolder",
      width: "300px",
    },
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
  },
  listClass: {
    alignItems: "center",
  },
  tool: {
    display: "flex",
    flexDirection: "column",
  },
  whats: {
    width: "110px",
    "&:hover": {
      color: "yellow",
    },
    "&.css-10hburv-MuiTypography-root": {
      fontWeight: "bold",
    },
  },
  beauty: {
    width: "175px",
  },
  theFancy: {
    display: "flex",
    flexDirection: "row",
  },
  searchIcon: {
    "&.css-i4bv87-MuiSvgIcon-root": {
      fontSize: "32px",
      marginLeft: "30px",
      marginTop: "30px",
    },
  },
  personIcon: {
    "&.css-i4bv87-MuiSvgIcon-root": {
      fontSize: "32px",
      marginLeft: "120px",
      marginTop: "30px",
      marginRight: "30px",
    },
  },
  workIcon: {
    "&.css-i4bv87-MuiSvgIcon-root": {
      fontSize: "31px",
      marginTop: "30px",
    },
  },
  gift: {
    width: "80px",
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
    marginTop: "60px",
  },
  cart: {
    "&.css-ahj2mt-MuiTypography-root": {
      fontSize: "26px",
      fontFamily: " sans-serif",
      fontWeight: "bold",
    },
  },
  searchBox: {
    backgroundColor: "white",
    color: "black",
    border: "4px solid red",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "100px",
  },
  card: {
    width: 500,
    height: 600,
  },
  cardDiv: {
    width: 500,
    height: 450,
    marginTop: "150px",
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
  },

  input: {
    position: "absolute",
    top: "170px",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: 150,
    border: "none",
    boxShadow: "1px #DCDCDC	",
     paddingLeft: "50px",
    fontSize: "30px",
    outline: "none",
  },
  box: {
    width: "1900px",
    backgroundColor: "red",
  },
  searchBtn: {
    padding: "12px",
    fontSize: "13px",
    textTransform: "uppercase",
    outline: "none",
    cursor: "pointer",
    backgroundColor: "white",
    color: "black",
    alignItems: "center",
    height: "50px",
    width: "92px",
    borderRadius: " 0px 50px 50px 0px",
    marginLeft: "-5px",
    marginTop: "25px",
    border: "1 px grey",
    overflow: "none",
  },
  inputSearchPage: {
    height: "50px",
    fontSize: "20px",
    border: "2px solid grey",
    marginTop: "25px",
    marginLeft: "60px",
    overflow: "auto",
  },
  searchDiv: {
    display: "flex",
    marginTop: "10px",
    marginBottom: "50px",
    marginLeft: "60px",
  },
  searchText: {
    fontSize: "30px",
    fontWeight: "bold",
    marginTop: "250px",
    marginLeft: "650px",
    marginBottom: "150px",
    "&.css-ahj2mt-MuiTypography-root": {
      fontSize: "35px",
      fontWeight: "bold",
      marginTop: "30px",
      marginLeft: "20px",
      width: "300px",
    },
  },
  searchText2: {
    fontSize: "30px",
    fontWeight: "bold",
    marginTop: "50px",
    marginLeft: "150px",
    marginBottom: "150px",
    "&.css-ahj2mt-MuiTypography-root": {
      fontSize: "35px",
      fontWeight: "bold",
      marginTop: "30px",
      marginLeft: "20px",
      width: "300px",
    },
  },
  
  hr: {
    marginBottom: "50px",
    width: "1600px",
    marginLeft:"115px"
  },
  
});

export default function ButtonAppBar() {
  const classes = useStyles();

  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);
  const onClose = (event: any) => {
    setOpenDrawer(false);
  };
  const handleClick = (event: any) => {
    setOpenDrawer(!openDrawer);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [filter, setFilter] = React.useState("");
  const searchText = (event: any) => {
    setFilter(event.target.value);
  };

  let dataSearch = Data.filter((item: any) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });
  const [showPerPage, setShowPerPage] = useState(3);
  // const [pagination, setPagination] = useState({
  //   start: 0,
  //   end: showPerPage,
  // });
  const [page, setPage]=useState(1);
  const onPaginationChange = () => {
    // setPagination({ start: start, end: end });
    setPage(page+1);
  };
  // const onPaginationChange = ({start, end}:any) => {
  //   setPagination({ start: start, end: end });
  //   console.log(start, end);
  // };

  return (
    <>
      <AppBar position="static" className={classes.mainContainers}>
        <Toolbar className={classes.tool}>
          <div className={classes.theFancy}>
            <SearchIcon
              className={classes.searchIcon}
              onClick={handleOpen}
            />
            <Modal
              keepMounted
              open={open}
              onClose={handleClose}
            >
              <input
                className={classes.input}
                type="text"
                placeholder="Search"
                value={filter}
                onChange={(event:any)=>{
                 searchText(event)
                }}
              />
            </Modal>
            <Typography variant="h6" className={classes.free}>
              THE FANCY
            </Typography>
            <Drawer
              anchor="right"
              classes={{ paper: classes.drawerPaper }}
              onClose={() => setOpenDrawer(false)}
              open={openDrawer}
            >
              <div className={classes.top}>
                <Typography className={classes.cart}>Cart</Typography>
                <CloseIcon onClick={onClose} />
              </div>
              <Divider className={classes.divider} />
              <CartItem />
            </Drawer>
            <Link
      to="/signup"
      style={{ textDecoration: "none", color: "black" }}
    >
            <PersonOutlineOutlinedIcon className={classes.personIcon} />
            </Link>
            <WorkOutlineOutlinedIcon
              className={classes.workIcon}
              onClick={handleClick}
            ></WorkOutlineOutlinedIcon>
          </div>
          <div className={classes.listClass}>
            <List className={classes.flexContainer}>
              <ListItem>
                {/* <ListItemText className={classes.whats}><Dropdown/></ListItemText> */}
                <ListItemText className={classes.whats}>WHAT NEW</ListItemText>
              </ListItem>
              {/* <ListItem className={classes.gift}><Dropdown2/></ListItem> */}
              <ListItem className={classes.gift}>GIFT</ListItem>
              {/* <ListItem><Dropdown2/></ListItem> */}
              <ListItem>LIFESTYLE</ListItem>
              <ListItem>
                <ListItemText className={classes.beauty}>
                  BEAUTY & WELLNESS
                </ListItemText>
              </ListItem>
              <ListItem>WOMEN</ListItem>
              <ListItem>MEN</ListItem>
              <ListItem>
                <ListItemText className={classes.whats}>
                  KIDS & BABY
                </ListItemText>
              </ListItem>
              <ListItem>SALE</ListItem>
            </List>
          </div>
        </Toolbar>
      </AppBar>
      <div>

      {filter === "" ? (
        <Just />
      ) : (
        <div>
            <div className={classes.searchDiv}>
          <input
            className={classes.inputSearchPage}
            type="text"
            placeholder="Search"
            value={filter}
            onChange={(event:any)=>{
              searchText(event)
             }}
          />
          <button className={classes.searchBtn}>
            <SearchIcon onClick={handleOpen}>Open modal</SearchIcon>
          </button>
        </div>
      <hr className={classes.hr}></hr>
            {dataSearch.length === 0 ? (
              <h1 className={classes.searchText}>No Item found...</h1>
            ) : (
              <>
              <h1 className={classes.searchText2}>
                {dataSearch.length} Results
              </h1>
              <div className={classes.cardContainer}>
        {Data.slice((page-1)*showPerPage,page*showPerPage).map((post,key) => (
          <div className={classes.cardDiv}>
              <img
                src={post.image}
                className={classes.imgStyle}
                alt="1"
              />
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
        count={Data.length}
        isData={Data.slice((page-1)*showPerPage,page*showPerPage).length}
      />
              </>
            )}
          
        </div>
      )}
      
    </div>  
    </>
  );
}
