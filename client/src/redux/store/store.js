import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllPizzaReducer } from "../redcuers/pizzaReducer";
import { cartReducers } from "../redcuers/cartReducers";
import { userRegisterReducer, userLoginReducer } from "../redcuers/userReducer";
import { placeOrderReducer } from "../redcuers/orderReducer";
const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;
const rootReducer = combineReducers({
  getAllPizzaReducer,
  cartReducers,
  userRegisterReducer,
  userLoginReducer,
  placeOrderReducer,
});

const initialState = {
  cartReducers: {
    cartItems: cartItems,
  },
  userLoginReducer: {
    currentUser: currentUser,
  },
};

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export default store;
