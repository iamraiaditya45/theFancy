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
      marginLeft: "450px",
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
    //   marginTop:"10px",
    //   marginLeft:"170px",
    alignItems: "center",
  },
  tool: {
    display: "flex",
    flexDirection: "column",
  },
  whats: {
    width: "110px",
    '&:hover': {
      color: 'yellow',
  },
    "&.css-10hburv-MuiTypography-root": {
      fontWeight: "bold",
      
    },
  },
  home: {
    width: "110px",
  //   '&:hover': {
  //     background: 'white',
  //     color:"black",
  // },
  //   "&.css-10hburv-MuiTypography-root": {
  //     fontWeight: "bold",
      
  //   },
  },
  beauty: {
    width: "175px",
  },
  theFancy: {
    display: "flex",
    flexDirection: "row",
    justifyContent:'center'
  
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
});

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.mainContainers}>
      <Toolbar className={classes.tool}>
        <div className={classes.theFancy}>
          <SearchIcon className={classes.searchIcon} />
          <Typography variant="h6" className={classes.free}>
            THE FANCY 
          </Typography>
          <PersonOutlineOutlinedIcon className={classes.personIcon} />
          <WorkOutlineOutlinedIcon className={classes.workIcon} />
        </div>
        <div className={classes.listClass}>
          <List className={classes.flexContainer}>
            <ListItem className={classes.whats}><Dropdown/></ListItem>
            <ListItem className={classes.gift}><Dropdown2/></ListItem>
            <ListItem className={classes.home}><Dropdown1/></ListItem>
            <ListItem className={classes.lifestyles} ><Lifestyles/></ListItem>
            <ListItem className={classes.beauty}><Beauty/></ListItem>
            <ListItem className={classes.women} ><Women/></ListItem>  
            <ListItem className={classes.men} ><Men/></ListItem>
            <ListItem className={classes.beauty}><Kids/></ListItem>
            <ListItem className={classes.sale} ><Sale/></ListItem>
          </List>
        </div>
      </Toolbar>
    </AppBar>
  );
}
