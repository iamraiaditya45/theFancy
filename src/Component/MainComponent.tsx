import React from 'react'
import Appbar from "./Appbar1";
import Appbar2 from "./Appbar2";
import Dropdown from "./Dropdown";
import Footer from "./Footer";
import Justin from "./JustIn";
import Switch from '@mui/material/Switch';
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
 const MainComponent = ({toggleDark}:any) => {
    // const [darkState, setDarkState] = React.useState(false);
    // const palletType = darkState ? "dark" : "light";
    // const mainPrimaryColor = darkState ? "#FFFFFF" : "#000000";
    // const mainSecondaryColor = darkState ? "#FFFFFF" : "#FFFFFF";
    // const darkTheme = createTheme({
    //   palette: {
    //     type: palletType,
    //     primary: {
    //       main: mainPrimaryColor
    //     },
    //     secondary: {
    //       main: mainSecondaryColor
    //     }
    //   }
    // });
  
    // const handleThemeChange = () => {
    //   setDarkState(!darkState);
    // };
    // 
    
    return (
        <>
                  <Appbar />
     <Appbar2/>
     <Justin />
     <Footer /> 
            


     </> 
    )
}

export default MainComponent;