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
import logging from "../authentication/logging";
import ErrorText from '../authentication/error'
import Appbar1 from '../Component/Appbar1'
import Appbar2 from '../Component/Appbar2'
import Footer from '../Component/Footer'
import ButtonAppBar from "../Component/Appbar1";
import ButtonAppBar1 from "../Component/Appbar2";
import { firebaseAuth } from "../authentication/firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
const useStyles = makeStyles(() => ({
  box: {
    // marginLeft: "650px",
    height: "700px",
    // marginTop: "100px",
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
    justifyContent: "center",
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
      marginBottom: "5px",
      height: "40px",
    },
  },
  firstName: {
    "&.css-ahj2mt-MuiTypography-root": {
      marginBottom: "5px",
      marginTop: "5px",
    },
  },
}));
export default function Signup() {
  const [registering, setRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const signUpWithEmailAndPassword = () => {
    if (password !== confirm) {
      setError("Please make sure your passwords match.");
      return;
    }

    if (error !== "") setError("");

    setRegistering(true);

    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((result) => {
        console.log("createUserWithEmailAndPassword success", result);
        localStorage.setItem("uid", result?.user?.uid);
        navigate("/");
      })
      .catch((error) => {
        console.log("createUserWithEmailAndPassword error", error);
        if (error.code.includes("auth/weak-password")) {
          setError("Please enter a stronger password.");
        } else if (error.code.includes("auth/email-already-in-use")) {
          setError("Email already in use.");
        } else {
          setError("Unable to register.  Please try again later.");
        }

        setRegistering(false);
      });
  };

  const classes = useStyles();
  return (
    <>
      <ButtonAppBar />
      <ButtonAppBar1 />
      <div className={classes.box} header="Register">
        <Typography className={classes.signUp}>SignUp</Typography>

        <FormControl variant="standard">
          <Typography className={classes.firstName}>FIRST NAME</Typography>
          <TextField id="input-with-icon-textfield" variant="outlined" />
          <div className={classes.pass}>
            <Typography className={classes.firstName}>LAST NAME</Typography>
          </div>
          <TextField id="input-with-icon-textfield" variant="outlined" />
          <Typography className={classes.firstName}>EMAIL</Typography>
          <TextField
            type="email"
            name="email"
            id="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <Typography className={classes.firstName}>PASSWORD</Typography>
          <TextField
            autoComplete="new-password"
            type="password"
            name="password"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
          <Typography className={classes.firstName}> CONFIRM PASSWORD</Typography>
          <TextField
            autoComplete="new-password"
            type="password"
            name="confirm"
            id="confirm"
            onChange={(event) => setConfirm(event.target.value)}
            value={confirm}
          />

          <button
            disabled={registering}
            color="success"
            block
            onClick={() => signUpWithEmailAndPassword()}
            className={classes.btnCreate}
          >
            Sign Up
          </button>

          <Typography className={classes.create} variant="h6">
            Already have an account? <Link to="/login">Login.</Link>
          </Typography>
          <ErrorText error={error} />
        </FormControl>
      </div>
      {/* <Footer /> */}
    </>
  );
}
