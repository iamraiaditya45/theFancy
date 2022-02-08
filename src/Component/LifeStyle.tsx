import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Menu} from "@mui/material";
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
      width: "120px",
      marginTop: "2px",
      // backgroundColor: "white",
      '&:hover': {
        background: 'white',
        color:"black",
      },
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
  image:{
    height:'300px',
    width:'150px',
    margin:'5px'

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
export default function Lifestyles() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  // const [location, setLocation] = React.useState("");
  // const [branchDisplay, setBranchDisplay] = React.useState(false);

  const handleClose = () => {
    setAnchorEl(null);
  };
  // function handleHover(event: any) {
  //   console.log("handleHover");
  //   setAnchorEl(event.currentTarget);
  // }
  // function handleLeave() {

  //   console.log("handleLeave");
  

  //   setAnchorEl(null);
  // }
  return (
    <div>
      <Button className={classes.Btn} onClick={handleClick} >
      LIFFESTYLE      </Button>
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
          <ListItem className={classes.price}>GAMES & HOBBY</ListItem>
          <ListItem> Puzzles</ListItem>
          <ListItem>Cards & Games</ListItem>
          <ListItem>Crafts & DIY</ListItem>
          </div>
<div>
          <ListItem className={classes.price}>TECH</ListItem>
          <ListItem> Cases</ListItem>
          <ListItem>Accessories</ListItem>
          </div>
          <div>
          <ListItem className={classes.price}>LEISURE</ListItem>
          <ListItem> Luggage & Travel</ListItem>
          <ListItem>Sleep & Lounge</ListItem>
          <ListItem>Active & Outdoor</ListItem>
              </div>
          <div>
          <ListItem className={classes.price}>Pet</ListItem>
          <ListItem> Essentials</ListItem>
          <ListItem>Wearables</ListItem>
          <ListItem>Toys</ListItem>
          </div>
          <div>
        <img  className={classes.image} src="./img3.png" alt="img"></img>
          <img  className={classes.image} src="./img4.png"  alt="img"></img>
          </div>
        </List>
      </Menu>
    </div>
  );
}
