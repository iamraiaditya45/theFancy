import React from 'react';
import logo from './logo.svg';
import './App.css';
import Appbar from './Component/Appbar1';
import Appbar2 from './Component/Appbar2';
import Dropdown from './Component/Dropdown';
import Drawer from './Component/Footer';
import Justin from './Component/JustIn';
import Page from './Component/Pagination';
function App() {
  return (
    <div className="App">
     <Appbar/>
     <Appbar2/>
     <Justin/>
     <Drawer/>
<Page/>
    </div>
  );
}

export default App;
