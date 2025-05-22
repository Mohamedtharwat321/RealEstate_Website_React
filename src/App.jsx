import React from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Slider from "./Components/Slider";
import Testiomnials from "./Components/Testiomnials";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="light">
      <ToastContainer/>
      <Header />
      <About />
      <Slider />
      <Testiomnials />
      <Form />
      <Footer />
    </div>
  );
};

export default App;
