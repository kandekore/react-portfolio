import { Routes, Route } from "react-router-dom";

import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import List from "./components/List";
// import Thermostat from "./components/Thermostat";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home></Home>}></Route>
      <Route exact path="/about-me" element={<About></About>}></Route>
      <Route exact path="/contact" element={<Contact></Contact>}></Route>
      <Route exact path="/portfolio" element={<Portfolio></Portfolio>}></Route>
    </Routes>
  );
};
export default AppRoutes;
