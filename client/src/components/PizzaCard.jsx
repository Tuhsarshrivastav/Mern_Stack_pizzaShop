import { useState } from "react";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";
import { useDispatch} from "react-redux";
import { adToCart } from "../redux/actions/cartAction";
const PizzaCard = ({ pizza }) => {
  const [varient, setvarient] = useState("small");
  const [quantity, setQuantity] = useState(1);

  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const addTocartHandler = () => {
    dispatch(adToCart(pizza, quantity, varient));
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card style={{ width: "18rem", marginTop: "30px", cursor: "pointer" }}>
        <Card.Img
          varient="top"
          src={pizza.image}
          style={{ height: "200px" }}
          onClick={handleShow}
        />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <hr />
          <Card.Text>
            <Row>
              <Col md={6} key={pizza._id}>
                <h6>varients</h6>
                <select
                  value={varient}
                  onChange={(e) => setvarient(e.target.value)}
                >
                  {pizza.varients.map((varient) => (
                    <option key={varient} value={varient}>{varient}</option>
                  ))}
                </select>
              </Col>
              <Col md={6}>
                <h6>Quantity</h6>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(10).keys()].map((v, i) => (
                    <option value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </Col>
            </Row>
          </Card.Text>
          <Row>
            <Col md={6}>Price : {pizza.prices[0][varient] * quantity}/-RS</Col>
            <Col md={6}>
              <Button
                onClick={addTocartHandler}
                className="bg-dark text-white"
              >
                Add To Card
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Card.Img varient="top" src={pizza.image} />
          </div>
          <div>
            <h5 className="mt-2">Descripton :</h5>
            <h6>{pizza.description}</h6>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PizzaCard;
