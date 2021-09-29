import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllPizzas } from "../../redux/actions/PizzaAction";
import Loader from "../Loader";
import Error from "../Error";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
const PizzaList = () => {
  const dispatch = useDispatch();
  const pizzasState = useSelector((state) => state.getAllPizzaReducer);
  const { loading, error, pizzas } = pizzasState;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>S/n</th>
                <th>Pizza Name</th>
                <th>Prices</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pizzas &&
                pizzas.map((pizza) => (
                  <tr>
                    <td>
                      <img
                        src={pizza.img}
                        alt={pizza.name}
                        width="100px"
                        height="100px"
                      />
                    </td>
                    <td>{pizza.name}</td>
                    <td>
                      Small : {pizza.prices[0]["small"]}
                      <br />
                      Medium : {pizza.prices[0]["medium"]}
                      <br />
                      Large : {pizza.prices[0]["large"]}
                    </td>
                    <td>{pizza.category}</td>
                    <td>
                      <FiEdit /> &nbsp;
                      <AiFillDelete />
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
};

export default PizzaList;
