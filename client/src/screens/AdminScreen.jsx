import React, { useEffect } from "react";
import { Row, Col, Container, Button, ButtonGroup } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import UserList from "../components/Admin/UsersList";
import PizzaList from "../components/Admin/PizzaList";
import AddnewPizza from "../components/Admin/AddNewPizza";
import OrderList from "../components/Admin/OrderList";
import { useDispatch, useSelector } from "react-redux";
import EditPizza from "../components/Admin/EditPizza";
const AdminScreen = ({ history }) => {
  const { currentUser } = useSelector((state) => state.userLoginReducer);

  // useEffect(() => {
  //   if(localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
  //     window.location.href = "/";
  //   }
  // }, []);
  return (
    <>
      <Container>
        <Row>
          <h1 className="text-center bg-dark text-light p-2">Admin Panel</h1>
          <Col md={2}>
            <ButtonGroup vertical style={{ minHeight: "400px" }}>
              <Button onClick={() => history.push("/admin")}>All Users</Button>
              <Button onClick={() => history.push("/admin/pizzalist")}>
                All Pizzas
              </Button>
              <Button onClick={() => history.push("/admin/addnewpizza")}>
                Add New Pizza
              </Button>
              <Button onClick={() => history.push("/admin/orderlist")}>
                All Orders
              </Button>
            </ButtonGroup>
          </Col>
          <Col md={10}>
            <Switch>
              <Route path="/admin" component={UserList} exact />
              <Route path="/admin/pizzalist" component={PizzaList} exact />
              <Route
                path="/admin/editpizza/:pizzaId"
                component={EditPizza}
                exact
              />
              <Route path="/admin/addnewpizza" component={AddnewPizza} exact />
              <Route path="/admin/orderlist" component={OrderList} exact />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminScreen;
