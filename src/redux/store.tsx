import logger from 'redux-logger';
import {createStore,applyMiddleware} from "redux";
import rootReducers from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'cartReducer',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, rootReducers);


const store = createStore(persistedReducer, applyMiddleware(logger));
const persistor = persistStore(store);

export {store, persistor};   
