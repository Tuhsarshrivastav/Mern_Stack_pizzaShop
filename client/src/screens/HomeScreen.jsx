import { Container, Row, Col } from "react-bootstrap";
import PizzaCard from "../components/PizzaCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllPizzas } from "../redux/actions/PizzaAction";
import Loader from "../components/Loader";
import Error from "../components/Error";
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
          <Loader />
        ) : error ? (
          <Error error={error} />
        ) : (
          <Row>
            {pizzas?.map((pizza) => (
              <Col md={4} key={pizza._id}>
                <PizzaCard pizza={pizza} key={pizza._id}/>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default HomeScreen;
