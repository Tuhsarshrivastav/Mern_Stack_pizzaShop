import axios from "axios";
import swal from 'sweetalert';


export const userRegister = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  try {
    const { data } = await axios.post("/api/users/register", user);
    dispatch({ type: "USER_REGISTER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAIL", payload: error });
  }
};
export const userlogin = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  try {
    const { data } = await axios.post("/api/users/login", user);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
    localStorage.setItem("currentUser", JSON.stringify(data));
    window.location.href = "/";
    dispatch({ type: "USER_LOGIN_FAIL" });
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAIL", payload: error });
  }
};
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  window.location.href = "/login";
};
export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: "GET_USERS_REQUEST" });
  try {
    const response = await axios.get("/api/users/getallusers");
    console.log(response.data);
    dispatch({ type: "GET_USERS_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "GET_USERS_FAIL", payload: err });
  }
};

export const deleteUser = (userid) => async (dispatch) => {
  try {
    const res = await axios.post("/api/users/deleteuser", { userid });
    swal("User Deleted Succss!", "success");
    window.location.reload();
    console.log(res);
  } catch (error) {}
};
