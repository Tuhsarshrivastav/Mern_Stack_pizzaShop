export const getAllPizzaReducer = (state = { pizzas: [] }, action) => {
  switch (action.type) {
    case "GET_ALL_PIZZAS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_ALL_PIZZAS_SUCCESS":
      return {
        pizzas: action.payload,
        loading: false,
      };
    case "GET_ALL_PIZZAS_FAIL":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export const addPizzaReducer = (state = { pizzas: [] }, action) => {
  switch (action.type) {
    case "ADD_PIZZAS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ADD_PIZZAS_SUCCESS":
      return {
        pizzas: action.payload,
        loading: false,
      };
    case "ADD_PIZZAS_FAIL":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
