import React from 'react';
import './App.css';
import Appbar from './Component/Appbar1';
import Appbar2 from './Component/Appbar2';
import Drawer from './Component/Footer';
import Justin from './Component/JustIn';
import Page from './Component/pagination1';
function App() {
  return (
    <div className="App">
     <Appbar/>
     <Appbar2/>
     {/* <Dropdown/> */}
     <Justin/>
     <Drawer/>
<Page/>
    </div>
  );
}

export default App;
