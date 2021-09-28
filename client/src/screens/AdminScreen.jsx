import React from "react";
import { Row, Col, Container, Button, ButtonGroup } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import UserList from "../components/Admin/UsersList";
import PizzaList from "../components/Admin/PizzaList";
import AddnewPizza from "../components/Admin/AddNewPizza";
import OrderList from "../components/Admin/OrderList";

const AdminScreen = ({history}) => {
  return (
    <>
      <Container>
        <Row>
          <h1 className="text-center bg-dark text-light p-2">Admin Panel</h1>
          <Col md={4}>
            <ButtonGroup vertical style={{ minHeight: "400px" }}>
              <Button>All Users</Button>
              <Button style={{ marginTop: "5px" }}> All Pizzas</Button>
              <Button style={{ marginTop: "5px" }}>Add New Pizza</Button>
              <Button style={{ marginTop: "5px" }}>All Orders</Button>
            </ButtonGroup>
          </Col>
          <Col md={8}>
            <Switch>
              <Route path="/admin" component={UserList} exact />
              <Route path="/admin/pizzalist" component={PizzaList} exact />
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
