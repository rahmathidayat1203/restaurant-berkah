import Navbar from "../navbars/navbar";
import Banner from "../banner/banner";
import Food from "../food/popularFood";
import About from "../about/about";
const Body = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Food />
      <About />
    </>
  );
};

export default Body;
