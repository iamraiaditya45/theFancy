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
       marginRight:"-100px"
  }
  },
  menuItem: {
    width: 80,
    fontSize: 15,
    textAlign: "center",
    marginLeft:0,
    border:'1px solid black',
  },
home:{
    fontWeight:"bolder",
    marginBottom:"10px",
  },
  image:{
    height:'300px',
    width:'150px',
    margin:'5px'
  },
  listDiv:{
    display:"flex",
    justifyContent:"space-between",
    "&.css-h4y409-MuiList-root":{
      padding:"40px",
      },
},  
  customWidth: {
    '& div': {
        width: '',
    }
}
}));
export default function Dropdown1() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleClose = () => {
    setAnchorEl(null);
  };
  // const handleClick =( event:any) => {
  //   setAnchorEl(event.currentTarget);
  // };
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
      <Button className={`${classes.Btn} ${anchorEl ? classes.btnHoverStyle : ''}`} onClick={handleHover}>
      HOME      </Button>
      <Menu 
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.menuAreas}
      > 
        <List onMouseLeave={handleClose} 
        className={classes.listDiv}>
            <div>
          <ListItem className={classes.home}>LIVING</ListItem>
          <ListItem> Decor & Objects</ListItem>
          <ListItem>Home Textiles</ListItem>
          <ListItem>Cadles & Home Fragrances</ListItem>
          <ListItem>Library</ListItem>
          <ListItem>Plants & Planters</ListItem>
          <ListItem>Storage & Organization</ListItem>
          <ListItem>Small Furnishing</ListItem>
          <ListItem>Lighting</ListItem>
          </div>
<div>
          <ListItem className={classes.home}>Dining & Kitchen</ListItem>
          <ListItem> Dinnnerware & Flatware</ListItem>
          <ListItem>Table Linens & More</ListItem>
          <ListItem>Serveware & Entertaining</ListItem>
          <ListItem>Cookware</ListItem>
          <ListItem>Kitchen Accesories</ListItem>
          <ListItem>Food & Pantry</ListItem>
          </div>
          <div>
          <ListItem className={classes.home}>Drink & Barware</ListItem>
          <ListItem> Glassware</ListItem>
          <ListItem>Pitchers & Decenters</ListItem>
          <ListItem>Coasters & bar Accessories</ListItem>
          <ListItem>Cups & Mugs</ListItem>
          <ListItem>On the Go</ListItem>
          <ListItem>Drinks</ListItem>
          </div>
          <div>
          <ListItem className={classes.home}>Working</ListItem> 
          <ListItem> Desk Accessories</ListItem>
          <ListItem>Home Tech</ListItem>
          <ListItem>Journals & Stationery</ListItem>
          </div>
          <div>
          <img  className={classes.image} src="./img1.png" alt="img"></img>
          <img  className={classes.image} src="./img2.png"  alt="img"></img>
          </div>
        </List>
      </Menu>
    </div>
  );
}
