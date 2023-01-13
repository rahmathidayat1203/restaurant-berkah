import { Container, Row, Col, Image } from "react-bootstrap";
import "./banner.css";

const Banner = () => {
  return (
    <>
      <Container className="jumbotron" fluid>
        <div className="banner">
          <Row className="content d-flex align-items-center">
            <Col>
              <div className="tag-line ms-5">
                <div className="punch-line">
                  <p className="tags-line-1 fs-1 fw-bold">Lorem ipsum dolor sit amet</p>
                  <h6 className="fs-5 fw-normal mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. A cras semper auctor
                    neque vitae tempus quam pellentesque. Justo nec ultrices dui sapien eget mi.
                  </h6>
                  <button className="button-65" type="button" href="#discover">
                    Discover Menu
                  </button>
                </div>
              </div>
            </Col>
            <Col className="images">
              <Image className="banner-image" src={process.env.PUBLIC_URL + "/img/assets-banner.jpg"} alt="banner" />
              <Image className="image-decoration-2" src={process.env.PUBLIC_URL + "/img/whiskers.png"}></Image>
              <Image className="image-decoration" src={process.env.PUBLIC_URL + "/img/spatula.png"}></Image>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Banner;
