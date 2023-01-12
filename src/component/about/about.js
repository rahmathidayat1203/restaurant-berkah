import { Container, Col, Row, Image } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDown, faStore } from "@fortawesome/free-solid-svg-icons";
import "./about.css";

const About = () => {
  return (
    <>
      <section id="about">
        <Container className="p-3 mb-5">
          <div className="about-banner shadow">
            <Row className="text-center mt-3 ">
              <h3 className="fw-bold text-secondary">About Restaurant Berkah</h3>
            </Row>
            <Row>
              <Col>
                <p className="mt-3 ms-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat labore consequuntur magnam, repellendus tempora dolorem debitis a alias amet esse quis laudantium, laborum qui, voluptate non reiciendis veniam laboriosam
                  aperiam. Unde consequatur dicta incidunt. Facere, vero. Atque, perferendis commodi sint animi eius dolorum! Itaque temporibus architecto veritatis animi, eveniet officiis adipisci molestias doloribus corrupti distinctio
                  cum ea earum exercitationem reprehenderit. Harum facere ea excepturi facilis suscipit consectetur, laudantium odit aspernatur soluta, molestias minus delectus labore tempora saepe maxime ut repellat aut nostrum. Nemo, rem
                  perferendis corrupti ea quo facere dolores.
                </p>
              </Col>
              <Col>
                <div className="image-about text-center">
                  <Image className="d-inline-block" src={process.env.PUBLIC_URL + "/img/assets-banner.jpg"}></Image>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
