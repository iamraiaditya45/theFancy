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
      width: "90px",
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
export default function Women() {
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
    // console.log("handleHover");
    setAnchorEl(event.currentTarget);
  }
  // function handleLeave() {

  //   console.log("handleLeave");
  

  //   setAnchorEl(null);
  // }
  return (
    <div>
      <Button className={`${classes.Btn} ${anchorEl ? classes.btnHoverStyle : ''}`}onClick={handleHover}>
      Women      </Button>
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
        onClose={handleClose}
      >
        <List onMouseLeave={handleClose} 
        className={classes.listDiv}>
            <div>
          <ListItem className={classes.price}>ACCCESSORIES</ListItem>
          <ListItem> Bags & Wallets</ListItem>
          <ListItem>Scarves & Cold-Weather</ListItem>
          <ListItem>Hats & Hair Accessories</ListItem>
          <ListItem>Sunglasses & Eyewear</ListItem>          
          <ListItem>Socks & Loungewear</ListItem>
          </div>
<div>
          <ListItem className={classes.price}>JEWELRY</ListItem>
          <ListItem> Earrings</ListItem>
          <ListItem>Rings</ListItem>
          <ListItem>Necklaces</ListItem>
          <ListItem>Bracelets & Anklets</ListItem>
          <ListItem>Pins & Charms</ListItem>

          </div>
          <div>
          <ListItem className={classes.price}>VINTAGE VAULT & COLLECTIBLES </ListItem>
          <ListItem> Bags & Accessories</ListItem>
              </div>
          <div>
        <img  className={classes.image} src="./img7.png" alt="img"></img>
          <img  className={classes.image} src="./img8.png"  alt="img"></img>
          </div>
        </List>
      </Menu>
    </div>
  );
}
