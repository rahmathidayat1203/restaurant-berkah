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
                  <p className="tags-line-1 fs-1 fw-bold">Enak & Mengenyangkan</p>
                  <h6 className="fs-5 fw-normal mb-5">Nikmati Hidangan Dengan Cita Rasa Rumahan,Yang Akan Membuat Anda Sangat Menikmati Waktu Makan Anda</h6>
                  <button className="button-65" type="button" href="#discover">
                    Discover Menu
                  </button>
                </div>
              </div>
            </Col>
            <Col>
              <Image className="banner-image" src={process.env.PUBLIC_URL + "/img/assets-banner.jpg"} alt="banner" />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Banner;
