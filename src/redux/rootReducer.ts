import { combineReducers } from "redux";
import cartReducer from "../Component/cart/reducer";
import productsReducer from "../Component/Justin/reducer"





const rootReducers = combineReducers({ cartReducer, productsReducer })

export default rootReducers;
