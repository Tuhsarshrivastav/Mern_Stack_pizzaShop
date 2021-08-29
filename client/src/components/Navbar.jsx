import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <Image
              src="images/logo.png"
              alt="logo"
              style={{ height: "50px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>Cart</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
