import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import SearchIcon from "@mui/icons-material/Search";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Dropdown from './Dropdown';
import Dropdown2 from './Dropdown2';
import Dropdown1 from "./Dropdown1";
import Lifestyles from "./LifeStyle";
import Beauty from "./Beauty";
import Women from "./Women";
import Men from "./Men";
import Kids from "./Kids";
import Sale from "./Sale";
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import { Divider, Modal } from "@mui/material";
import CartItem from "./cart/cartItem";
import { useNavigate } from "react-router-dom";
import RouteNames from "../router/routerNames";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  mainContainers: {
    height: "145px",
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
      marginLeft: "475px",
      marginRight: "425px",
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
    //   marginTop:"10px",
    //   marginLeft:"170px",
    display: "flex",
    flexDirection: "column",
    width: "1300px",
  },
  tool: {
    display: "flex",
    flexDirection: "column",
  },
  whats: {
    width: "110px",
    '&:hover': {
      color: 'black',
    },
    "&.css-10hburv-MuiTypography-root": {
      fontWeight: "bold",

    },
  },
  home: {
    width: "110px",
  },
  beauty: {
    width: "175px",
  },
  theFancy: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center'

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
      marginLeft: "30px",
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
    width: "110px",
  },
  lifestyles: {
    width: "110px",
  },
  women: {
    width: "110px",
  },
  men: {
    width: "70px",
  },
  kids: {
    width: "110px",
  },
  sale: {
    width: "100px",
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
      height: "10px"
    },
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "60px"
  },
  cart: {
    "&.css-ahj2mt-MuiTypography-root": {
      fontSize: "26px",
      fontFamily: " sans-serif",
      fontWeight: "bold",
    },
  },
  input: {
    position: "absolute",
    top: "111px",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "145px",
    border: "none",
    boxShadow: "1px #DCDCDC	",
    padding: "0px,200px,0px 200px",
    fontSize: "30px",
    outline: "none",
  },
  namecont: {
    width: "fit-content"
  }
});

export default function ButtonAppBar1() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = React.useState<Boolean | any>(false);
  const onClose = (event: any) => {
    setOpenDrawer(false)
  };
  const handleClick = (event: any) => {
    setOpenDrawer(!openDrawer)
    console.log("test")
  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [filter, setFilter] = React.useState("");
  const searchText = (event: any) => {
    setFilter(event.target.value);
  };

  // let dataSearch = searchdata.filter((item: any) => {
  //   return Object.keys(item).some((key) =>
  //     item[key]
  //       .toString()
  //       .toLowerCase()
  //       .includes(filter.toString().toLowerCase())
  //   );
  // });
  return (
    <AppBar position="static" className={classes.mainContainers}>
      <Toolbar className={classes.tool}>
        <div className={classes.theFancy}>
          <SearchIcon className={classes.searchIcon} onClick={handleOpen} />
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
              onChange={(event: any) => {
                searchText(event)
              }}
            />
          </Modal>
          <div className={classes.namecont} onClick={(e) => { navigate(RouteNames.HOME) }} >
            <Typography variant="h6" className={classes.free}>
              THE FANCY
            </Typography>
          </div>
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

          <PersonOutlineOutlinedIcon className={classes.personIcon} onClick={(e) => { navigate(RouteNames.LOGIN) }} />
          <WorkOutlineOutlinedIcon className={classes.workIcon} onClick={handleClick} ></WorkOutlineOutlinedIcon>
        </div>
        <div className={classes.listClass}>
          <List className={classes.flexContainer}>
            <ListItem className={classes.whats}><Dropdown /></ListItem>
            <ListItem className={classes.gift}><Dropdown2 /></ListItem>
            <ListItem className={classes.home}><Dropdown1 /></ListItem>
            <ListItem className={classes.lifestyles} ><Lifestyles /></ListItem>
            <ListItem className={classes.beauty}><Beauty /></ListItem>
            <ListItem className={classes.women} ><Women /></ListItem>
            <ListItem className={classes.men} ><Men /></ListItem>
            <ListItem className={classes.beauty}><Kids /></ListItem>
            <ListItem className={classes.sale} ><Sale /></ListItem>
          </List>
        </div>
      </Toolbar>
    </AppBar >

  );
}
