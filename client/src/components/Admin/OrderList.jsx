import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllOrders } from "../../redux/actions/orderAction";
const OrderList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);
  return <div>orderlist</div>;
};

export default OrderList;
