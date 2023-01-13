import { Row } from "react-bootstrap";
import Galeries from "../carousel/carousel";
import "./food.css";
const FoodList = (props) => {
  return (
    <>
      <Row className="foodlist-blocks ms-4 text-center">
        <Galeries />
      </Row>
    </>
  );
};

export default FoodList;
