import { Container, Row, Col } from "react-bootstrap";
import PizzaCard from "../components/PizzaCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllPizzas } from "../redux/actions/PizzaAction";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const pizzasState = useSelector((state) => state.getAllPizzaReducer);
  const { loading, error, pizzas } = pizzasState;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>
      <Container>
        {loading ? (
          <h1>loading</h1>
        ) : error ? (
          <h1>error while fechting</h1>
        ) : (
          <Row>
            {pizzas?.map((pizza) => (
              <Col md={4}>
                <PizzaCard pizza={pizza} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default HomeScreen;
