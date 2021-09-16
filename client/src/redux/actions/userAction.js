import axios from "axios";
export const userRegister = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  try {
    const res = await axios.post("/api/users/register", user);
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
