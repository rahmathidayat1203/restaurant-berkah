import { useState } from "react";
import { Col, Row, Form, Button, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHomeLgAlt } from "@fortawesome/free-solid-svg-icons";
import Modals from "../login/modal";
import "./register.css";
const Register = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section className="registers">
        <div className="register-banner">
          <Row>
            <Col>
              <div className="lefts text-center">
                <Button className="home" href="*">
                  <FontAwesomeIcon className="home-ic" icon={faHomeLgAlt} />
                </Button>
                <Image className="images-reg" src={process.env.PUBLIC_URL + "/img/assets-banner.jpg"} />
                <h1>Wellcome To Register Page</h1>
                <svg className="wave1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="rgb(250, 183, 40)"
                    fill-opacity="1"
                    d="M0,96L24,122.7C48,149,96,203,144,208C192,213,240,171,288,149.3C336,128,384,128,432,138.7C480,149,528,171,576,202.7C624,235,672,277,720,277.3C768,277,816,235,864,224C912,213,960,235,1008,234.7C1056,235,1104,213,1152,218.7C1200,224,1248,256,1296,234.7C1344,213,1392,139,1416,101.3L1440,64L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </Col>
            <Col>
              <div className="right">
                <h1>Register</h1>
                <Form>
                  <Form.Group controlId="formBasicFirsName" className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="firstname" placeholder="Enter first Name" />
                  </Form.Group>
                  <Form.Group controlId="formBasicFirsName" className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="lastname" placeholder="Enter Last Name" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail" className="mb-2">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-2 mt-2" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                  </Form.Group>
                  <Row>
                    <Col>
                      <Button className="mt-2" variant="warning" type="submit">
                        Submit
                      </Button>
                    </Col>
                    <Col>
                      <Button className="createdAccountLink" onClick={handleShow}>
                        have an account
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </div>

        <Modals show={show} handleClose={handleClose} />
      </section>
    </>
  );
};
export default Register;
