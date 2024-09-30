import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import Logo from "./Image/Aifpu.jpg";
import React from "react";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          {/* <Navbar.Brand href="/"></Navbar.Brand> */}
          <img src={Logo} alt="Aifpu logo" className="Logo" />

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" />
          <Nav className="ms-auto">
            <Link
              to="/login"
              className="text-decoration-none mt-2 text-secondary fs-6 text-capitalize text-white"
            >
              {/* <Nav.Link href="/login"> */}
              <FaSignInAlt /> sign in
              {/* </Nav.Link> */}
            </Link>
            <Link
              to="/register"
              className="text-decoration-none mt-2 text-white ps-4 text-capitalize "
            >
              <FaSignOutAlt /> sign up
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
