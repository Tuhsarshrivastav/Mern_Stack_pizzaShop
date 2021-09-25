import Loader from "../components/Loader";
import Error from "../components/Error";
import Success from "../components/Success";
import { Button } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";
import { Publishable_key } from "../Keys";
import { placeOrder } from "../redux/actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
const Cheackout = ({ subTotal }) => {
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subTotal));
  };
  return (
    <>
      {loading && <Loader />}
      {error && <Error error="something went wrong" />}
      {success && <Success success="order placed success" />}
      <StripeCheckout
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey={Publishable_key}
        currency="INR"
      >
        <Button>Pay Now </Button>
      </StripeCheckout>
    </>
  );
};

export default Cheackout;
