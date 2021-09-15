import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllPizzaReducer } from "../redcuers/pizzaReducer";
import { cartReducers } from "../redcuers/cartReducers";
import { userRegisterReducer } from "../redcuers/userReducer";
const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const rootReducer = combineReducers({
  getAllPizzaReducer,
  cartReducers,
  userRegisterReducer,
});

const initialState = {
  cartReducers: {
    cartItems: cartItems,
  },
};

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export default store;
