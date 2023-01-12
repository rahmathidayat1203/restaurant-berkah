import { useState } from "react";
import { Container, Navbar, Nav, Form } from "react-bootstrap";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button } from "react-bootstrap";

const Navbars = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top" className="shadow-md">
        <Container>
          <Navbar.Brand className="fw-semibold">
            Restaurant <b>Berkah</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link href="#home" className="active fw-semibold">
                Home
              </Nav.Link>
              <Nav.Link href="#menu" className="fw-semibold">
                Popular Menu
              </Nav.Link>
              <Nav.Link href="#delivery" className="fw-semibold">
                Delivery
              </Nav.Link>
              <Nav.Link href="#about" className="fw-semibold">
                About
              </Nav.Link>
              <Nav.Link href="#reviews" className="fw-semibold">
                Reviews
              </Nav.Link>
              <Nav.Link href="#contact" className="fw-semibold">
                Contact
              </Nav.Link>
              <Nav.Link onClick={handleShow}>
                <li>
                  <FontAwesomeIcon icon={faUser} />
                </li>
              </Nav.Link>
              <Nav.Link href="#cart">
                <li>
                  <FontAwesomeIcon icon={faBagShopping} />
                </li>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default Navbars;
