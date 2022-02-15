import React from 'react'
import './App.css';
import Appbar from './Component/Appbar1';
import Appbar2 from './Component/Appbar2';
import Dropdown from './Component/Dropdown';
import Drawer from './Component/Footer';
import Justin from './Component/JustIn';

 const Main = () => {
    return (
        <div>
              <Appbar/>
     <Appbar2/>
     <Justin/>
     <Drawer/> 
        </div>
    )
}
export default Main;