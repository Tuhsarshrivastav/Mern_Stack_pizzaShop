import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { userRegister } from "../redux/actions/userAction";
const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [ConfrimPassword, setConfrimPassword] = useState("");
  const dispatch = useDispatch();
  const registerhandler = (e) => {
    e.preventDefault();
    if (password !== ConfrimPassword) {
      alert("password do not match");
    } else {
      const user = { name, email, password, ConfrimPassword };
      dispatch(userRegister(user));
      setEmail("");
      setName("");
      setPassword("");
      setConfrimPassword("");
    }
  };
  return (
    <>
      <Container>
        <Form>
          <h1>Regiteration</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={ConfrimPassword}
              onChange={(e) => setConfrimPassword(e.target.value)}
            />
          </Form.Group>
          <Button onClick={registerhandler} variant="primary">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Login;
