import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { makeStyles } from "@mui/styles";
import { Typography } from '@mui/material';
import ButtonAppBar from './Appbar1';
import ButtonAppBar1 from './Appbar2';
import { useNavigate } from 'react-router-dom';
import RouteNames from '../router/routerNames';

const useStyles = makeStyles(() => ({
    loginwrapper: {
        // height: "100vh",
        // width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        justifyItems: "center",
        flexDirection: "column",
    },
    box: {
        height: "550px",
        marginTop: "80px"
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
        fontWeight: "bold",
        "&:hover": {
            backgroundColor: 'black',
            color: "white"
        }
    },
    pass: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "30px",
    },
    create: {
        textAlign: "center",
        marginTop: "10px",
        "&.css-2ulfj5-MuiTypography-root": {
            marginTop: "16px",
            fontSize: "17px",
        },
    },
    login: {
        "&.css-ahj2mt-MuiTypography-root": {
            fontSize: "35px",
            fontWeight: "bold",
            marginBottom: "25px"
        },
    },
    email: {
        "&.css-ahj2mt-MuiTypography-root": {
            marginBottom: "10px"
        }
    },

}));
export default function Login_old() {
    const classes = useStyles();
    const navigate = useNavigate();
    return (
        <div className={classes.loginwrapper} >
            <ButtonAppBar />
            <ButtonAppBar1 />
            <Box className={classes.box} sx={{ '& > :not(style)': { m: 1 } }}>
                <Typography className={classes.login}>LogIn</Typography>
                <FormControl variant="standard">
                    <Typography className={classes.email}>EMAIL</Typography>
                    <TextField
                        id="input-with-icon-textfield"
                        variant="outlined"
                    />
                    <div className={classes.pass}>
                        <Typography className={classes.email}>PASSWORD</Typography>
                        <Typography className={classes.email}>FORGET PASSWORD ?</Typography>
                    </div>
                    <TextField
                        id="input-with-icon-textfield"
                        variant="outlined"
                    />
                    <button className={classes.checkoutButton}>LOGIN</button>
                    <div onClick={(e) => { navigate(RouteNames.SIGNUP) }} >
                        <Typography className={classes.create} variant="h6">Create Account</Typography>
                    </div>
                </FormControl>
            </Box>
        </div>
    );
}
