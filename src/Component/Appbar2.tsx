import * as React from "react";
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
import Dropdown from './Dropdown';
import Dropdown2 from './Dropdown2';
import Drawers from './DrawerContainer';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton , Divider} from "@mui/material";
import CartItem from './cartItem'
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
  divider:{
    '&.css-9mgopn-MuiDivider-root': {
width:"410px",
marginTop:"10px",
marginBottom:"10px",
marginLeft:"20px",
color:"black",
height:"10px"
},
},
top:{
display:"flex",
justifyContent:"space-between",
marginLeft:"20px",
marginRight:"20px",
marginTop:"60px"
},
cart:{
    "&.css-ahj2mt-MuiTypography-root":{
fontSize:"26px",
fontFamily:" sans-serif",
fontWeight:"bold",
    },
}
});

export default function ButtonAppBar() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = React.useState<Boolean|any>(false);
  const onClose = (event: any) => {
    setOpenDrawer(false)
  };
  const handleClick=(event:any)=>{
    setOpenDrawer(!openDrawer)
    console.log("hjjj",openDrawer)
  }
  return (
    <AppBar position="static" className={classes.mainContainers} >
      <Toolbar className={classes.tool}>
        <div className={classes.theFancy}>
          <SearchIcon className={classes.searchIcon} />
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
        <CloseIcon onClick={onClose}/>
        </div>
        <Divider className={classes.divider}/>
        <CartItem/>
      </Drawer>

          <PersonOutlineOutlinedIcon className={classes.personIcon} />
          <WorkOutlineOutlinedIcon className={classes.workIcon} onClick={handleClick} ></WorkOutlineOutlinedIcon>         
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
              <ListItemText className={classes.whats}>KIDS & BABY</ListItemText>
            </ListItem>
            <ListItem>SALE</ListItem>
          </List>
        </div>
      </Toolbar>
    </AppBar>
  );
}
