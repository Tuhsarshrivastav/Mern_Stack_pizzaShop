import { Button } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";
import { Publishable_key } from "../Keys";
import { useDispatch } from "react-redux";
import { placeOrder } from "../redux/actions/orderAction";
const Cheackout = ({ subTotal }) => {
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subTotal));
  };
  return (
    <StripeCheckout
      amount={subTotal * 100}
      shippingAddress
      token={tokenHandler}
      stripeKey={Publishable_key}
      currency="INR"
    >
      <Button>Pay Now </Button>
    </StripeCheckout>
  );
};

export default Cheackout;
