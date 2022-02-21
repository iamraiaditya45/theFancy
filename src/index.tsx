import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ButtonAppBar from './Component/Appbar1';
import ButtonAppBar2 from './Component/Appbar2';
import LabelBottomNavigation from './Component/Footer';

ReactDOM.render(
  <React.StrictMode>
    <ButtonAppBar/>
    <ButtonAppBar2/>
    <App />
    <LabelBottomNavigation/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
