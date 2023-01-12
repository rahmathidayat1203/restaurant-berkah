import { Card, Row, Col } from "react-bootstrap";
import "./food.css";
const FoodList = (props) => {
  return (
    <>
      <Row className="foodlist-blocks ms-4 text-center">
        <Col className="food">
          <a className="foodClick" href="#foodDetail">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={process.env.PUBLIC_URL + "/img/assets-banner.jpg"} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col className="food">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/img/assets-banner.jpg"} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="food">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/img/assets-banner.jpg"} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="food">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/img/assets-banner.jpg"} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="food">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/img/assets-banner.jpg"} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="food">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/img/assets-banner.jpg"} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default FoodList;
