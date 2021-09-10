import PizzaAll from "../pizza-data";
import { Container, Row, Col } from "react-bootstrap";
import PizzaCard from "../components/PizzaCard";
const HomeScreen = () => {
  return (
    <>
      <Container>
        <Row>
          {PizzaAll.map((pizza) => (
            <Col md={4}>
              <PizzaCard pizza={pizza} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
