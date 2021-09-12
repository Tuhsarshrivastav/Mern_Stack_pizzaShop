import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { adToCart } from "../redux/actions/cartAction";
const CartScreen = () => {
  const cartState = useSelector((state) => state.cartReducers);
  const { cartItems } = cartState;
  const dispatch = useDispatch();
  return (
    <>
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col md={6}>
            <h3>My Cart</h3>
            <Row>
              {cartItems.map((item) => (
                <>
                  <Col md={7}>
                    <h6>
                      {item.name} [{item.varient}]
                    </h6>
                    <h6>
                      Price : {item.quantity} x {item.prices[0][item.varient]} *{" "}
                      {item.price}
                    </h6>
                    <h6>
                      Quantity : &nbsp;
                      <FaMinusCircle
                        className="text-danger"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            adToCart(item, item.quantity - 1, item.varient)
                          );
                        }}
                      />
                      &nbsp;
                      {item.quantity}&nbsp;
                      <FaPlusCircle
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            adToCart(item, item.quantity + 1, item.varient)
                          );
                        }}
                        className="text-success"
                      />
                    </h6>
                  </Col>
                  <Col md={5}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "5px",
                      }}
                    />
                  </Col>
                  <hr style={{ marginTop: "10px" }} />
                </>
              ))}
            </Row>
          </Col>

          <Col md={4}>
            <h1>Payment Info</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CartScreen;
