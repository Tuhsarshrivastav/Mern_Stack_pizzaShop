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
export const addPizzaReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_PIZZAS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ADD_PIZZAS_SUCCESS":
      return {
        success:true,
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
export const getPizzaByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_PIZZABYID_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_PIZZABYID_SUCCESS":
      return {
        pizza: action.payload,
        loading: false,
      };
    case "GET_PIZZABYID_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
