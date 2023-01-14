import { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./login.css";
const Modals = (props) => {
  const [formValue, setformValue] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginFormData = new FormData();
    loginFormData.append("email", formValue.email);
    loginFormData.append("password", formValue.password);

    console.log(formValue);
    console.log(process.env.PUBLIC_URL);
    axios
      .post(process.env.REACT_APP_API_URL + "/user", {
        email: formValue.email,
        password: formValue.password,
      })
      .then((res) => {
        console.log(res.status);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" value={formValue.email} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" value={formValue.password} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
            <Row>
              <Col>
                <Button variant="warning" type="submit">
                  Submit
                </Button>
              </Col>
              <Col>
                <a className="createdAccountLink" href="/register">
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
