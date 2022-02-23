import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import { store, persistor } from './redux/store';
import Router from './router';
// import { initializeApp } from "firebase/app";
import LabelBottomNavigation from './Component/Footer';

// const firebaseConfig = {
//   apiKey: "AIzaSyBgl1l1RnUL2nCobTjPd_LNWq_UDXdKuPI",
//   authDomain: "thefancy-3e4f8.firebaseapp.com",
//   projectId: "thefancy-3e4f8",
//   storageBucket: "thefancy-3e4f8.appspot.com",
//   messagingSenderId: "371360495033",
//   appId: "1:371360495033:web:f9f74598c7765a044c7268"
// };

// const app = initializeApp(firebaseConfig);

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
