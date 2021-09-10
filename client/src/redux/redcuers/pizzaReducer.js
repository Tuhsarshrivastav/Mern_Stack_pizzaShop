export const getAllPizzaReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ALL_PIZZAS_REQUEST":
      return {
        ...state,
      };
    case "GET_ALL_PIZZAS_SUCCESS":
      return {
        pizzas: action.payload,
      };
    case "GET_ALL_PIZZAS_FAIL":
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
