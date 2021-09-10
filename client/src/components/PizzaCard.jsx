import { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
const PizzaCard = ({ pizza }) => {
  const [variant, setVariant] = useState("small");
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <Card style={{ width: "18rem", marginTop: "30px" }}>
        <Card.Img variant="top" src={pizza.image} style={{ height: "200px" }} />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <hr />
          <Card.Text>
            <Row>
              <Col md={6}>
                <h6>Variants</h6>
                <select
                  value={variant}
                  onChange={(e) => setVariant(e.target.value)}
                >
                  {pizza.varients.map((variant) => (
                    <option value={variant}>{variant}</option>
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
            <Col md={6}>Price : {pizza.prices[0][variant] * quantity}/-RS</Col>
            <Col md={6}>
              <Button className="bg-dark text-white">Add To Card</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default PizzaCard;
