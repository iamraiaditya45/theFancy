import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
  mainContainer: {
    height: "40px",
          boxShadow: "0px 0px 0px 0px",

    "&.css-hip9hq-MuiPaper-root-MuiAppBar-root": {
      backgroundColor: "#3E3B39",
      boxShadow: "0px 0px 0px 0px",
    },
  },
  free: {
    marginTop: "10px",
    "&.css-2ulfj5-MuiTypography-root": {
      marginTop: "-20px",
      fontSize: "15px",
      marginLeft: "660px",
      // textAlign:"center",
    },
  },
 
});

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.mainContainer}>
      <Toolbar>
        <Typography variant="h6" className={classes.free}>
          Free Domestic Shipping on all order above $75
        </Typography>
       
      </Toolbar>
    </AppBar>
  );
}
