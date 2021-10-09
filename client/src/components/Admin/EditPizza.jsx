import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPizzaById } from "../../redux/actions/PizzaAction";
const EditPizza = ({ match }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.getpizzabyidReducer);
  useEffect(() => {
    dispatch(getPizzaById(match.params.pizzaId));
  }, [dispatch]);
  return (
    <div>
      <h1>edit piza comp</h1>
    </div>
  );
};

export default EditPizza;
