import Register from "../component/register/register";
import { Routes, Route } from "react-router-dom";
import Body from "../component/body/body";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Body />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<h1>Contact Route</h1>} />
        <Route path="/delivery" element={<h1>Delivery Route</h1>} />
      </Routes>
    </>
  );
};
export default Routing;
