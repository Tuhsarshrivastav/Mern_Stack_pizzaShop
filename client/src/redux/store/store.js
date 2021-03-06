import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getAllPizzaReducer,
  addPizzaReducer,
  getPizzaByIdReducer,
  updatePizzaByIdReducer,
} from "../redcuers/pizzaReducer";
import { cartReducers } from "../redcuers/cartReducers";

import {
  userRegisterReducer,
  userLoginReducer,
  getAllUsersReducer,
} from "../redcuers/userReducer";
import {
  placeOrderReducer,
  getUserOrdersReducer,
  getAllOrdersReducer,
} from "../redcuers/orderReducer";
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
  getUserOrdersReducer,
  addPizzaReducer,
  getPizzaByIdReducer,
  updatePizzaByIdReducer,
  getAllOrdersReducer,
  getAllUsersReducer,
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
