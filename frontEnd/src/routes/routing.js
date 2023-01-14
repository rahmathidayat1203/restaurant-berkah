import Register from "../component/register/register";
import { Routes, Route } from "react-router-dom";
import Body from "../component/body/body";
import Delivery from "../component/delivery/delivery";
import Notfound from "../component/404/404";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Notfound />} />
        <Route path="/" element={<Body />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<h1>Contact Route</h1>} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/discover-menu" element={<h1>menu Route</h1>} />
      </Routes>
    </>
  );
};
export default Routing;
