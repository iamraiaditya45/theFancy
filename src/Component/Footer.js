import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { makeStyles } from "@mui/styles";
import { Typography } from '@mui/material';
import { FormatQuoteRounded } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
const useStyles = makeStyles(() => ({
    mainContainer:{
        width:"100%",
        marginTop:"80px",
        height:"300px",
        "&.makeStyles-mainContainer-139":{
        // backgroundColor:"red",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around",
        borderTop:"1px solid #D3D3D3	",
         paddingTop:"20px",
        }
    },
    footerText:{
   display:"flex",
    flexDirection:"row",
    marginLeft:"150px",
    },
    footerInnerText:{
        display:"flex",
        flexDirection:"column",
        paddingLeft:"70px",
        justifyContent:"flex-start",
        width:"30%",
        marginTop:"20px",
    },
    footerInnerText2:{
        display:"flex",
        flexDirection:"column",
        paddingLeft:"70px",
        paddingRight:"220px",
        justifyContent:"space-evenly",
        marginTop:"20px",
    },
    aboutUs:{
        "&.css-ahj2mt-MuiTypography-root":{
            fontWeight:"bold",
        }
    },
    icons:{
        display:"flex",
        paddingLeft:"10px"
        // justifyContent:"space-around",
        // marginLeft:"-130px",
    },
    hr:{
      color:"grey",
      marginBottom:"25px",
      "&.makeStyles-hr-35":{

      }
    },
    fb:{
    marginRight:"10px"
    }
  }));
  
  
  
export default function LabelBottomNavigation() {
    const classes = useStyles();
  return (
      <>
      <div>
<div className={classes.mainContainer} >
  <hr className={classes.hr}></hr>
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
          <div className={classes.footerInnerText2}>
          <Typography>News and Update</Typography>
          <Typography>Keep updated with all the new launch</Typography>
 <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
          <Input
            id="standard-adornment-password"
            endAdornment={
              <InputAdornment position="end">
                <MailOutlineIcon/>
              </InputAdornment>
            }
          />
        </FormControl>
        <div className={classes.icons}>
            <FacebookOutlinedIcon className={classes.fb}/>
            <InstagramIcon className={classes.fb}/>
            <TwitterIcon/>
        </div>
          </div>
                        </div>
          </div>
          {/* <div className={classes.footerText}> */}
      
    {/* </div> */}
    </div>
    </>
  );
}
