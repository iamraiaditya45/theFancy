import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import Appbar from './Component/Appbar1';
import Appbar2 from './Component/Appbar2';
import Drawer from './Component/Footer';
import Justin from './Component/JustIn';
import Page from './Component/pagination1';
import { store, persistor } from './redux/store';
import Router from './router';

function App() {
  return (
    <div className="App">
      {/* <Appbar/>
     <Appbar2/>
     <Justin/>
     <Drawer/>
<Page/> */}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
