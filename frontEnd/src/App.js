import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routes/routing";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </>
  );
};

export default App;
