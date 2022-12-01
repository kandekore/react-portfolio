import React from "react";
import { HashRouter as Router, Routes } from "react-router-dom";
import AppRoutes from "./Routes";

// import HelloReact from "./components/HelloReact";
// import Home from "./components/Home";
// import Alert from "./components/Alert";
// import Display from "./components/Display";
import List from "./components/List";
import Nav from "./components/Nav";
// import users from "./users";
// import Greeting from "./components/Greeting";
// import Thermostat from "./components/Thermostat";
// import Counter from "./components/Counter";
// import Form from "./components/Form";
// import PortfolioContainer from "./components/PortfolioContainer";

// const App = () => <PortfolioContainer />;

// We create a couple variables which contain strings
const message = "Invalid user id or password";
const alertType = "success";

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
        <Nav />
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
      </Router>
    </>
  );
}

export default App;
