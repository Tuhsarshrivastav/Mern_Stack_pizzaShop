import axios from "axios";

export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: "GET_ALL_PIZZAS_REQUEST" });
  try {
    const {data} = await axios.get("api/pizzas/getAllPizzas");
    dispatch({ type: "GET_ALL_PIZZAS_SUCCESS", payload: data });
  } catch (err) {
    dispatch({ type: "GET_ALL_PIZZAS_FAIL", payload: err });
  }
};
