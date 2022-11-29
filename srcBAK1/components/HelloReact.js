import React from "react";
import { useState } from "react";

function HelloReact() {
  const text = "some text";

  const [greeting, setGreeting] = useState("Welcome");

  setTimeout(() => {
    setGreeting("Greeting Updated");
  }, 5000);

  return (
    <p>
      Hello World! Here is {text} {greeting}
    </p>
  );
}

export default HelloReact;
