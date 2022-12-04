import React from "react";
import { HashRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />

        <AppRoutes />
        <Footer />
      </Router>
    </>
  );
}

export default App;
