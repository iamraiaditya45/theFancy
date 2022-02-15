//  import React from 'react';
// import MainComponent from './Component/MainComponent';
// import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
// function App() {
//   // const [toggleDark, settoggleDark] = React.useState(false);
//   const [mode, setMode] = React.useState<'light' | 'dark'>('light');
//   const colorMode = React.useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
//       },
//     }),
//     [],
//   );

//   const theme = React.useMemo(
//     () =>
//       createTheme({
//         palette: {
//           mode,
//         },
//       }),
//     [mode],
//   );

//   const myTheme = createTheme({
    
//     // Theme setting
    
//   });
  
//   return (
    
//     <ThemeProvider theme={theme}>
//       <MainComponent toggleDark={mode} />
//     </ThemeProvider>
//   );
// }
  
// export default App;
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import classes from "*.module.css";
import Switch from '@mui/material/Switch';
import MainComponent from './Component/MainComponent'
import { makeStyles } from "@mui/styles";

// const isFavourite = () => (true);
const useStyles = makeStyles(() => ({
 mainDiv:{
  //  marginBottom:"50px",
  //  marginLeft:"50px",
   width:"100%"
 } ,
 swit:{
  // marginBottom:"-100px",
 "&.css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase .MuiSwitch-input":{
  //  marginBottom:"-100px",
  //  marginLeft:"500px",
 },
}
}));
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const classes = useStyles();

  return (
    <Box 
      sx={{
        display: "flex",
         flexDirection:"column",
        width: "100%",
        alignItems: "center",
        bgcolor: "background.default",
        color: "text.primary",
         borderRadius: 0,
         overflow:"auto",
          // marginLeft:"50px",
        //  marginBottom:"-50px",
        //  p: -10,
      }}
    >
      <IconButton onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === "dark" ? (
                    <Switch className={classes.swit}  />
        ) : (
          <Switch  />
        )}
              </IconButton>
        <div className={classes.mainDiv}>
<MainComponent/>
        </div>
    </Box>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
