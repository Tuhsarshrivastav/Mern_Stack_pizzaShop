import axios from "axios";

export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: "GET_ALL_PIZZAS_REQUEST" });
  try {
    const response = await axios.get("/api/pizzas/getAllPizzas");
    dispatch({ type: "GET_ALL_PIZZAS_SUCCESS", payload: response.data});
  } catch (err) {
    dispatch({ type: "GET_ALL_PIZZAS_FAIL", payload: err });
  }
};
