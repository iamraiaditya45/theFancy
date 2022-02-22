import  React,{useRef} from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { makeStyles } from "@mui/styles";
import { Typography } from '@mui/material';
import {signup} from '../authentication/fire';


const useStyles = makeStyles(() => ({
    box:{
     marginLeft:"650px"
    },
    checkoutButton: {
        padding: "0.7rem 3rem",
        fontSize: "13px",
        textTransform: "uppercase",
        outline: "none",
        cursor: "pointer",
        backgroundColor: "white",
        color: "black",
        alignItems: "center",
        height: "48px",
        width: "422px",
        borderRadius: "50px",
        marginLeft: "0px",
        marginTop: "30px",
        border: "1px solid black",
        fontWeight:"bold",
        "&:hover": {
            backgroundColor: 'black',
            color:"white"
          }
      }, 
      pass:{
          display:"flex",
          justifyContent:"space-between"
      },
      create:{
          textAlign:"center",
          marginTop:"10px",
          "&.css-2ulfj5-MuiTypography-root": {
      marginTop:"16px",
      fontSize:"17px",
        },
    },
    signUp:{
        "&.css-ahj2mt-MuiTypography-root":{
        fontSize:"35px",
        fontWeight:700,
        marginBottom:"10px"
        },
    },
    firstName:{
      "&.css-ahj2mt-MuiTypography-root":{
        marginBottom:"10px",
        marginTop:"10px"
      }
    }
}));
export default function InputWithIcon() {
  const emailRef=useRef();
  const passwordRef= useRef();

async function handleSignup() {
  await signup(emailRef.current.value, passwordRef.current.value);
}
  const classes=useStyles();
  return (
//     <Box className={classes.box} sx={{ '& > :not(style)': { m: 1 } }}>
//         <Typography className={classes.signUp}>SignUp</Typography>
//       <FormControl variant="standard">
//           <Typography className={classes.firstName}>FIRST NAME</Typography>
//       <TextField
//         id="input-with-icon-textfield"
//         variant="outlined"
//       />
//       <div className={classes.pass}>
//       <Typography className={classes.firstName}>LAST NAME</Typography>
//           </div>
// <TextField
//         id="input-with-icon-textfield"
//         variant="outlined"
//       />
//                 <Typography className={classes.firstName}>EMAIL</Typography>
//       <TextField
//         id="input-with-icon-textfield"
//         variant="outlined"
//         ref={emailRef}
//       />

// <Typography className={classes.firstName}>PASSWORD</Typography>
//       <TextField
//         id="input-with-icon-textfield"
//         variant="outlined"
//         ref={passwordRef}
//         type="password"
//       />

//               <button onClick={handleSignup} className={classes.checkoutButton}>CREATE</button>
//               <Typography className={classes.create} variant="h6">Already have an account?Login</Typography>
//             </FormControl>
//          </Box>
 <>
<input ref={emailRef} placeholder ="email"/>
<input ref={passwordRef} type="password" placeholder ="password"/>
<button onClick={handleSignup}>Sign</button>
</>
  );
}
