import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Menu, MenuItem } from "@mui/material";
import Data from "../data.json";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";

const useStyles = makeStyles(() => ({
  Btn: {
    backgroundColor: "white",
    color: "white",
    fontSize: 17,
    "&.css-1e6y48t-MuiButtonBase-root-MuiButton-root": {
      color: "white",
      fontSize: "16px",
      width: "100px",
      marginTop: "2px",
      // backgroundColor: "white",
    },
  },
  menuAreas: {
    marginTop: "0px",
    '& div': {
      width: '100%',
      // paddingLeft:"100px",
       marginRight:"-100px"
  }
  },
  menuItem: {
    width: 200,
    fontSize: 20,
    textAlign: "center",
    marginLeft: 20,
  },

  price:{
    fontWeight:"bolder",
    marginBottom:"10px",
  },
  listDiv:{
      display:"flex",
      justifyContent:"space-between",
      "&.css-h4y409-MuiList-root":{
        padding:"40px",
        },
  }
}));
export default function SimpleMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const [location, setLocation] = React.useState("");
  const [branchDisplay, setBranchDisplay] = React.useState(false);

  const handleClose = () => {
    setAnchorEl(null);
  };
  function handleHover(event: any) {
    console.log("handleHover");
    setAnchorEl(event.currentTarget);
  }
  function handleLeave() {

    console.log("handleLeave");
  

    setAnchorEl(null);
  }
  return (
    <div>
      <Button className={classes.Btn} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
      GIFTS      </Button>
      <Menu
        // id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        //  onMouseOut={handleClose}
        className={classes.menuAreas}
        style={{
          // width: '1950px'
        }}
      >
        <List onMouseLeave={handleClose} 
        className={classes.listDiv}>
            <div>
          <ListItem className={classes.price}>Price</ListItem>
          <ListItem> Under $30</ListItem>
          <ListItem>Under $50</ListItem>
          <ListItem>Under $80</ListItem>
          <ListItem>Splurge Worthy</ListItem>
          </div>
<div>
          <ListItem className={classes.price}>Recipent</ListItem>
          <ListItem> For Him</ListItem>
          <ListItem>For Her</ListItem>
          <ListItem>For Kid</ListItem>
          <ListItem>For Both</ListItem>
          </div>
          <div>
          <ListItem className={classes.price}>Gift Guide</ListItem>
          <ListItem> For Proud Parents</ListItem>
          <ListItem>For the Gournamend</ListItem>
          <ListItem>For the Gournamend</ListItem>
          <ListItem>For Both</ListItem>
          </div>
          <div>
          <ListItem className={classes.price}>Recipent</ListItem>
          <ListItem> For Him</ListItem>
          <ListItem>For Her</ListItem>
          <ListItem>For Kid</ListItem>
          <ListItem>For Both</ListItem>
          </div>
        </List>
      </Menu>
    </div>
  );
}
