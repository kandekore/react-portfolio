import { Routes, Route } from "react-router-dom";

import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";
import Portfolio from "./components/pages/Portfolio";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<About></About>}></Route>
      <Route exact path="/about-me" element={<About></About>}></Route>
      <Route exact path="/resume" element={<Resume></Resume>}></Route>
      <Route exact path="/contact" element={<Contact></Contact>}></Route>
      <Route exact path="/portfolio" element={<Portfolio></Portfolio>}></Route>
    </Routes>
  );
};
export default AppRoutes;
