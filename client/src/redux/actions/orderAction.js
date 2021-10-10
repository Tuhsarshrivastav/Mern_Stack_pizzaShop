import axios from "axios";
import swal from "sweetalert";
export const placeOrder = (token, subTotal) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  const currentUser = getState().userLoginReducer.currentUser;
  const cartItems = getState().cartReducers.cartItems;
  try {
    const res = axios.post("/api/orders/placeorder", {
      token,
      subTotal,
      currentUser,
      cartItems,
    });
    dispatch({ type: "PLACE_ORDER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAIL" });
  }
};
export const getUserOrders = () => async (dispatch, getState) => {
  const currentUser = getState().userLoginReducer.currentUser;
  dispatch({
    type: "USER_ORDER_REQUEST",
  });
  try {
    const response = await axios.post("/api/orders/getuserorder", {
      userid: currentUser._id,
    });
    dispatch({ type: "USER_ORDER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "USER_ORDER_FAIL", payload: error });
  }
};
export const getAllOrders = () => async (dispatch, getState) => {
  dispatch({
    type: "ALL_ORDER_REQUEST",
  });
  try {
    const response = await axios.get("/api/orders/alluserorder");
    dispatch({ type: "ALL_ORDER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "ALL_ORDER_FAIL", payload: error });
  }
};
export const deliverOrder = (orderid) => async (dispatch, getState) => {
  dispatch({
    type: "GET_ALL_ORDER_REQUEST",
  });
  try {
    const response = await axios.post("/api/orders/deliverorder", { orderid });
    swal("Pizza Deliverd Success!", "success");
    const orders = await axios.get("/api/orders/alluserorder");
    dispatch({ type: "GET_ALL_ORDER_SUCCESS", payload: orders.data });
    window.location.href = "/admin/orderlist";
  } catch (error) {
    dispatch({ type: "GET_ALL_ORDER_FAIL", payload: error });
  }
};
