import { Routes, Route } from "react-router-dom";

import Greeting from "./components/Greeting";
import List from "./components/List";
import Thermostat from "./components/Thermostat";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Greeting></Greeting>}></Route>
      <Route exact path="/about-me" element={<Thermostat />}></Route>
    </Routes>
  );
};
export default AppRoutes;
