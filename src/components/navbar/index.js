import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./index.css";
import brand from "../../images/brand-logo.png";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="primary" expand="lg" variant="dark" className="bg-color">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={brand}
              width="70"
              height="70"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-4 fw-bold">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Services</Nav.Link>
              <Nav.Link href="#link">Surgons</Nav.Link>
              <Nav.Link href="#link">Testimonial</Nav.Link>
              <Button className="ms-md-2 text-light" variant="outline-primary">
                Get appointment
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
