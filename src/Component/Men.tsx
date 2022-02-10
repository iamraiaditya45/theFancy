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
      width: "80px",
      height:'47px',
      marginTop: "2px",
      '&:hover': {
        background: 'white',
        color:"black",
        borderBottom:'3px solid gray',
        borderRadius:'0px',
      },
    },
  },
  btnHoverStyle:{
    backgroundColor: 'white !important',
    color:"black  !important",
    borderBottom:'3px solid gray !important',
    borderRadius:'0px !important',
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
    width:'200px',
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
export default function Men() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleClick = (event: any) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const [location, setLocation] = React.useState("");
  // const [branchDisplay, setBranchDisplay] = React.useState(false);

  const handleClose = () => {
    setAnchorEl(null);
  };
  function handleHover(event: any) {
    console.log("handleHover");
    setAnchorEl(event.currentTarget);
  }
  // function handleLeave() {

  //   console.log("handleLeave");
  

  //   setAnchorEl(null);
  // }
  return (
    <div>
      <Button className={`${classes.Btn} ${anchorEl ? classes.btnHoverStyle : ''}`} onMouseEnter={handleHover}>
      Men      </Button>
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
          <ListItem className={classes.price}>BAGS & WALLETS</ListItem>
          <ListItem> Wallets & Small Leather Goods</ListItem>
          <ListItem>Backpacks & Weekenders</ListItem>
          <ListItem>Briefcases & Tech Carriers</ListItem>
          </div>
<div>
          <ListItem className={classes.price}>WATCHES & JEWELRY</ListItem>
          <ListItem> Watches</ListItem>
          <ListItem>Jewelry</ListItem>
          </div>
          <div>
          <ListItem className={classes.price}>ACCESSORIES</ListItem>
          <ListItem>Men's Socks & Loungewear</ListItem>
          <ListItem>Men's Groomingg</ListItem>

              </div>
          <div>
        <img  className={classes.image} src="./img9.png" alt="img"></img>
          <img  className={classes.image} src="./img10.png"  alt="img"></img>
          </div>
        </List>
      </Menu>
    </div>
  );
}
