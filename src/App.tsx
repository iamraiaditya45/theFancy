import React from 'react';
import './App.css';
import Appbar from './Component/Appbar1';
import Appbar2 from './Component/Appbar2';
// import Dropdown from './Component/Dropdown';
function App() {
  return (
    <div className="App">
     <Appbar/>
     <Appbar2/>
     {/* <Dropdown/> */}
    </div>
  );
}

export default App;
