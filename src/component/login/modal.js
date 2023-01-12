import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import "./login.css";
const Modals = (props) => {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
            <Row>
              <Col>
                <Button variant="warning" type="submit">
                  Submit
                </Button>
              </Col>
              <Col>
                <a className="createdAccountLink" href="#createdAccount">
                  don't have account yet
                </a>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};
export default Modals;
