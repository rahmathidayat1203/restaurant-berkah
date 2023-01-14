import { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import Modals from "../login/modal";

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
              <Nav.Link href="/" className="active fw-semibold">
                Home
              </Nav.Link>
              <Nav.Link className="fw-semibold" href="#popular">
                Popular Menu
              </Nav.Link>
              <Nav.Link href="/delivery" className="fw-semibold">
                Delivery
              </Nav.Link>
              <Nav.Link href="#about" className="fw-semibold">
                About
              </Nav.Link>
              <Nav.Link href="#reviews" className="fw-semibold">
                Reviews
              </Nav.Link>
              <Nav.Link className="fw-semibold">Contact</Nav.Link>
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
        <Modals show={show} handleClose={handleClose} />
      </Navbar>
    </>
  );
};

export default Navbars;
