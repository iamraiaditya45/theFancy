import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import { makeStyles } from "@mui/styles";
import { Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
const useStyles = makeStyles(() => ({
  mainContainer: {
    width: "100%",
    marginTop: "50px",
    "&.css-16lloyr-MuiBottomNavigation-root": {
      // backgroundColor:"red",
      height: "200px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      borderTop: "1px solid #D3D3D3	",
      paddingTop: "20px",
    }
  },
  footerText: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "150px",
  },
  footerInnerText: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "70px",
    justifyContent: "flex-start",
    width: "30%"
  },
  footerInnerText2: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "70px",
    paddingRight: "220px",
    justifyContent: "space-evenly"
  },
  aboutUs: {
    "&.css-ahj2mt-MuiTypography-root": {
      fontWeight: "bold",
    }
  },
  icons: {
    display: "flex",
    justifyContent: "flex-start",
    // marginLeft:"-130px",
  }
}));



export default function LabelBottomNavigation() {
  const classes = useStyles();
  return (
    <>
      {/* <BottomNavigationAction>
    <Typography>het</Typography>
    </BottomNavigationAction>
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} /> */}
      <BottomNavigation className={classes.mainContainer} >
        <div className={classes.footerText}>
          <div className={classes.footerInnerText}>
            <Typography className={classes.aboutUs}>ABOUT US</Typography>
            <Typography>Our Story</Typography>
            <Typography>Download the App</Typography>
            <Typography>Affiliate</Typography>
          </div>
          <div className={classes.footerInnerText}>
            <Typography className={classes.aboutUs}>SUPPORT</Typography>
            <Typography>Accesbility</Typography>
            <Typography>Contact us</Typography>
            <Typography>FAQs</Typography>
          </div>
          <div className={classes.footerInnerText}>
            <Typography className={classes.aboutUs} >TERMS & CONDITIONS</Typography>
            <Typography>Privacy Policy</Typography>
            <Typography>Terms of Service</Typography>
          </div>
        </div>
        <div className={classes.footerText}>
          <div className={classes.footerInnerText2}>
            <Typography>News and Update</Typography>
            <Typography>Keep updated with all the new launch</Typography>
            {/* <TextField id="standard-basic" label="Email" variant="standard"
          endAdornment= {
            <InputAdornment position="end">
              <MailOutlineIcon />
            </InputAdornment>
          }
  /> */}
            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
              <Input
                id="standard-adornment-password"
                endAdornment={
                  <InputAdornment position="end">
                    <MailOutlineIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
            <div className={classes.icons}>
              <FacebookOutlinedIcon />
              <InstagramIcon />
              <TwitterIcon />
            </div>
          </div>
        </div>
        {/* </div> */}
      </BottomNavigation>
    </>
  );
}
