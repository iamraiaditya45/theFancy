import React from 'react';
import logo from './logo.svg';
import './App.css';
import Appbar from './Component/Appbar1';
import Appbar2 from './Component/Appbar2';
import Dropdown from './Component/Dropdown';
import Drawer from './Component/Drawer';
import Cartpage from './Component/Cartpage';
function App() {
  return (
    <div className="App">
     <Appbar/>
     <Appbar2/>
     <Drawer/>
    </div>
  );
}

export default App;
