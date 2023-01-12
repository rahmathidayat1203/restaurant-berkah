import { Col, Container, Row } from "react-bootstrap";
import FoodList from "./popularfoodList";
const Food = () => {
  return (
    <Container id="menu" className="mb-4">
      <Row className="text-center">
        <Col>
          <h3 className="fw-bold mb-5">Popular Food</h3>
        </Col>
      </Row>
      <FoodList />
    </Container>
  );
};

export default Food;
