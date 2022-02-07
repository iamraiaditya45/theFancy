// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import InputBase from '@mui/material/InputBase';
// import Appbar2 from './Appbar2';

// const BootstrapInput = styled(InputBase)(({ theme }) => ({
//   'label + &': {
//     marginTop: theme.spacing(3),
//   },
//   '& .MuiInputBase-input': {
//     borderRadius: 4,
//     position: 'relative',
//     backgroundColor: theme.palette.background.paper,
//     border: '1px solid #ced4da',
//     fontSize: 16,
//     padding: '10px 26px 10px 12px',
//     transition: theme.transitions.create(['border-color', 'box-shadow']),
//     fontFamily: [
//       'Arial',
//       'sans-serif',
//     ].join(','),
//     '&:focus': {
//       borderRadius: 4,
//       borderColor: '#80bdff',
//       boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
//     },
//   },
// }));

// export default function CustomizedSelects() {
//   const [age, setAge] = React.useState('');
//   const handleChange = (event:any) => {
//     setAge(event.target.value);
//   };
//   return (
//     <div>

//       <FormControl sx={{ m: 2 }} variant="standard">
//         <Select
//           labelId="demo-customized-select-label"
//           id="demo-customized-select"
//           value={age}
//           onChange={handleChange}
//           input={<BootstrapInput/>}
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>

//     </div>
//   );
// }

// import React from "react";
// import { Button } from '@mui/material';
// import { makeStyles } from "@mui/styles";
// import { Menu , MenuItem} from '@mui/material';
// import Data from "../data.json";
// import ListItem from "@mui/material/ListItem";
// import List from "@mui/material/List";

// const useStyles = makeStyles(() => ({
//   Btn: {
//     backgroundColor: "white",
//     color:"white",
//     fontSize: 17,
//     "&.css-1e6y48t-MuiButtonBase-root-MuiButton-root":{
//       color:"white",
//       fontSize:"16px",
//       width:"130px",
//       marginTop:"2px",
//       // backgroundColor: "white",
//     },
   
//   },
//   menuArea: {
//     marginTop: "5px",

//   },
//   menuItem: {
//     width: 200,
//     fontSize: 20,
//     textAlign: "center",
//     marginLeft: 20,
//   },
//   h:{
//     color:"red",
//     '&:hover': {
//       color: 'yellow',
//   },
// }
// }));
// export default function SimpleMenu() {
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event:any) => {
//     setAnchorEl(event.currentTarget);
//   };
//  const[location , setLocation]=React.useState('');
//  const[branchDisplay , setBranchDisplay]=React.useState(false);

//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   function handleHover(event:any) {
//     setAnchorEl(event.currentTarget);
//   }
//   function handleLeave() {
//     setAnchorEl(null);
//   }
//   return (
//     <div>
//       <Button 
//         className={classes.Btn}
//         onMouseEnter={handleHover}
//       >
//         WHAT'S NEW
//       </Button>
//       <Menu
//         id="simple-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         //  onMouseOut={handleClose}
//         className={classes.menuArea}
         
//                  >       
//            <List          onMouseLeave={handleClose}
//  >
//             <ListItem>
//           Just In
//             </ListItem>
//             <ListItem > Featured Collecion</ListItem>
//             <ListItem>On our Radar:Brand to note</ListItem>
//             <ListItem>Gift Guide Quiz</ListItem>
//           </List>

//       </Menu>

//     </div>
//   );
// }

import React from 'react';
import { Button } from '@mui/material';
 import { makeStyles } from "@mui/styles";
 import { Menu , MenuItem} from '@mui/material';
 const useStyles = makeStyles({
  customWidth: {
      '& div': {
          width: '',
      }
  }
});

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick =( event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
<Menu
         id="simple-menu"
         anchorEl={anchorEl}
         keepMounted
         open={Boolean(anchorEl)}
        //  onClose={handleClose}
         className={classes.customWidth}
         onMouseOut={handleClose}
       >
         <MenuItem onClick={handleClose}>Profile</MenuItem>
         <MenuItem onClick={handleClose}>My account</MenuItem>
         <MenuItem onClick={handleClose}>Logout</MenuItem>
       </Menu>
      
    </div>
    
  );
  }
  