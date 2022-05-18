import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
const Navbars = () => {
    const [user] = useAuthState(auth);
    const handleSingOut = () => {
        signOut(auth);
      };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Job</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link> 
            <Nav.Link as={Link} to="/upload">Upload</Nav.Link>
          </Nav>
          <Nav>
          {user ? (
              <button
                className="btn btn-link text-danger text-decoration-none"
                onClick={handleSingOut}
              >
                Sing Out
              </button>
            ) : (
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
