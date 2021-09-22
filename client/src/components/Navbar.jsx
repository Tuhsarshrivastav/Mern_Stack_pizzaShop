import React from "react";
import { Navbar, Container, Nav, Image, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../redux/actions/userAction";

const NavBar = () => {
  const dispatch = useDispatch();
  const cartstate = useSelector((state) => state.cartReducers);
  const { currentUser } = useSelector((state) => state.userLoginReducer);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <LinkContainer to="/" style={{ cursor: "pointer", height: "50px" }}>
              <Image
                src="images/logo.png"
                alt="logo"
                style={{ height: "50px" }}
              />
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {currentUser ? (
                <>
                  <LinkContainer to="/">
                    <NavDropdown
                      title={currentUser.name}
                      id="basic-nav-dropdown"
                    >
                      <NavDropdown.Item href="#action/3.1">
                        Order
                      </NavDropdown.Item>

                      <NavDropdown.Item
                        onClick={() => {
                          dispatch(userLogout);
                        }}
                      >
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </LinkContainer>
                </>
              ) : (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link>Register</Nav.Link>
                  </LinkContainer>
                </>
              )}

              <LinkContainer to="/cart">
                <Nav.Link>Cart {cartstate.cartItems.length}</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
