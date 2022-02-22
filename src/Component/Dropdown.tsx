import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Menu, MenuItem } from "@mui/material";
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
      width: "130px",
      marginTop: "2px",
    },
  },
  menuArea: {
    marginTop: "5px",
  },
  menuItem: {
    width: 200,
    fontSize: 20,
    textAlign: "center",
    marginLeft: 20,
  },
  h: {
    color: "red",
    "&:hover": {
      color: "yellow",
    },
  },
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
    setAnchorEl(event.currentTarget);
  }
  function handleLeave() {
    setAnchorEl(null);
  }
  return (
    <div>
      <Button className={classes.Btn} onMouseEnter={handleHover}>
        WHAT'S NEW
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        //  onMouseOut={handleClose}
        className={classes.menuArea}
      >
        <List onMouseLeave={handleClose}>
          <ListItem>Just In</ListItem>
          <ListItem> Featured Collecion</ListItem>
          <ListItem>On our Radar:Brand to note</ListItem>
          <ListItem>Gift Guide Quiz</ListItem>
        </List>
      </Menu>
    </div>
  );
}
