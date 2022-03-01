import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import { store, persistor } from './redux/store';
import Router from './router';
import LabelBottomNavigation from './Component/Footer';
import { firebaseApp } from './authentication/firebase';
console.log("firebaseApp", firebaseApp);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
          <LabelBottomNavigation />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
