import React from "react";
import { HashRouter as Router, Routes } from "react-router-dom";
import AppRoutes from "./Routes";
import Footer from "./components/Footer";

// import HelloReact from "./components/HelloReact";
// import Home from "./components/Home";
// import Alert from "./components/Alert";
// import Display from "./components/Display";
import Header from "./components/Header";
import Nav from "./components/Nav";
// import users from "./users";
// import Greeting from "./components/Greeting";
// import Thermostat from "./components/Thermostat";
// import Counter from "./components/Counter";
// import Form from "./components/Form";
// import PortfolioContainer from "./components/PortfolioContainer";

// const App = () => <PortfolioContainer />;

// We create a couple variables which contain strings
const projects = [
  {
    head: {
      title: "project 1",
      description: "a great project",
      image: "/assets/images/scar.jpg",
    },
    tech: ["1tech", "w=2tech"],
    links: {
      github: "git.com",
      deployed: "http://#",
    },
  },
];

// import "./";

// TODO: Add a comment explaining what this function is doing
// This function is a functional component that helps us split the UI into distinct parts.
// In this case, we are returning another component, <HelloReact/> from it.
function App() {
  const name = "Darren";
  const team = "Aston villa";
  return (
    <>
      <Router>
        <Header />
        {/* <List users={users} /> */}
        {/* <Display /> */}
        {/*<Home name={name} team={team} /> */}
        {/* <HelloReact /> */}
        {/* <Alert type={alertType} message={message} />; */}
        {/* <Greeting /> */}
        {/* <Counter /> */}
        {/* <Form /> */}
        {/* <Thermostat /> */}
        {/* <PortfolioContainer /> */}
        <AppRoutes />
        <Footer />
      </Router>
    </>
  );
}

export default App;