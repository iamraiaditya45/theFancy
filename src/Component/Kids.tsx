import React from 'react';
import { Button } from '@mui/material';
 import { makeStyles } from "@mui/styles";
 import { Menu , MenuItem} from '@mui/material';
 const useStyles = makeStyles({
  Btn: {
    backgroundColor: "white",
    color: "white",
    fontSize: 17,
    "&.css-1p823my-MuiListItem-root":{
paddingleft:'8px',
paddingright:'8px',
    },
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

export default function Kids() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleClick =( event:any) => {
  //   setAnchorEl(event.currentTarget);
  // };
  function handleHover(event: any) {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <div>
      <Button className={`${classes.Btn} ${anchorEl ? classes.btnHoverStyle : ''}`}onClick={handleHover}>
        KIDS & BABY
      </Button>
<Menu
         id="simple-menu"
         anchorEl={anchorEl}
         keepMounted
         open={Boolean(anchorEl)}
         onClose={handleClose}
         className={classes.customWidth}
         onMouseOut={handleClose}
       >
         <MenuItem onClick={handleClose}>Nursery Room</MenuItem>
         <MenuItem onClick={handleClose}>Toys</MenuItem>
         <MenuItem onClick={handleClose}>Baby</MenuItem>
         <MenuItem onClick={handleClose}>Kids Accessories</MenuItem>
       </Menu>
      
    </div>
    
  );
  }
  