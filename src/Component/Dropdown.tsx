import React from 'react';
import { Button } from '@mui/material';
 import { makeStyles } from "@mui/styles";
 import { Menu , MenuItem} from '@mui/material';
 const useStyles = makeStyles({
  Btn: {
    backgroundColor: "white",
    color: "white",
    fontSize: 17,
    "&.css-1e6y48t-MuiButtonBase-root-MuiButton-root": {
      color: "white",
      fontSize: "16px",
      width: "130px",
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
  customWidth: {
      '& div': {
          width: '',  
      }
  }
});

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  var flag= false;

  // const handleClick =( event:any) => {
  //   setAnchorEl(event.currentTarget);
  // };
  function handleHover(event: any) {
    if(!flag){
      console.log("hadlehover");
      setAnchorEl(event.currentTarget);
      flag = true;
    }
  }

    function handleLeave() {
    console.log("handleLeave");
    setAnchorEl(null);
  }

  const handleClose = () => {
    console.log("handleclose")
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <div>
      <Button  className={`${classes.Btn} ${anchorEl ? classes.btnHoverStyle : ''}`} onMouseEnter={handleHover}>
        What's New
      </Button>
<Menu
         id="simple-menu"
         anchorEl={anchorEl}
         keepMounted
         open={Boolean(anchorEl)}
         onClose={handleClose}
         className={classes.customWidth}
       >
         <MenuItem onClick={handleClose}>Just In</MenuItem>
         <MenuItem onClick={handleClose}>Featured Collection</MenuItem>
         <MenuItem onClick={handleClose}>On out Raddar: Brands to note</MenuItem>
         <MenuItem onClick={handleClose}>Gift Guide Quiz</MenuItem>
       </Menu>
      
    </div>
    
  );
  }
  