import React, { useState } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { makeStyles } from "@mui/styles";
import { FormGroup, Typography } from "@mui/material";
import { signup } from "../authentication/config";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../authentication/firebase";
import logging from "../authentication/logging";
import ErrorText from '../authentication/error'
import Appbar1 from '../Component/Appbar1'
import Appbar2 from '../Component/Appbar2'
import Footer from '../Component/Footer'
const useStyles = makeStyles(() => ({
  box: {
    marginLeft: "650px",
    marginTop: "100px",
  },
  btnCreate: {
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
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
  pass: {
    display: "flex",
    justifyContent: "space-between",
  },
  create: {
    textAlign: "center",
    marginTop: "10px",
    "&.css-2ulfj5-MuiTypography-root": {
      marginTop: "16px",
      fontSize: "17px",
    },
  },
  signUp: {
    "&.css-ahj2mt-MuiTypography-root": {
      fontSize: "35px",
      fontWeight: 700,
      marginBottom: "10px",
    },
  },
  firstName: {
    "&.css-ahj2mt-MuiTypography-root": {
      marginBottom: "10px",
      marginTop: "10px",
    },
  },
}));
export default function InputWithIcon() {
    const [authenticating, setAuthenticating] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const Navigate = useNavigate();

    const signInWithEmailAndPassword = () => {
        if (error !== '') setError('');
        setAuthenticating(true);
        auth.signInWithEmailAndPassword(email, password)
        .then(result => {
            logging.info(result);
            Navigate('/');
        })
        .catch(error => {
            logging.error(error);
            setAuthenticating(false);
            setError(error.message);
        });
    }

    
  const classes = useStyles();
  return (
      <>
      <Appbar1/>
    <div className={classes.box} header="Register">
      <Typography className={classes.signUp}>SignUp</Typography>

      <FormControl variant="standard">
      <Typography className={classes.firstName}>EMAIL</Typography> 
<TextField
                    type="email"
                    name="email"
                    id="email"
                    onChange={event => setEmail(event.target.value)}
                    value={email}
                />
      <Typography className={classes.firstName}>PASSWORD</Typography> 
                <TextField 
                    autoComplete="new-password"
                    type="password"
                    name="password"
                    id="password"
                    onChange={event => setPassword(event.target.value)}
                    value={password}
                />
            <button
                disabled={authenticating}
                color="success"
                 block
                onClick={() => signInWithEmailAndPassword()}
                className={classes.btnCreate}
            >
                Login
            </button>
            <Typography className={classes.create} variant="h6">
          Already have an account? <Link to="/signup">Register here.</Link>
        </Typography>
        <Typography className={classes.create} variant="h6">
           <Link to="/signup">Forget your password?</Link>
        </Typography>
           
            <ErrorText error={error} />
            </FormControl>
        </div>
                    <Footer/>
       </>
  );
}
