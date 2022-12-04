import React from "react";

import projects from "../projects";
import Work from "./Project";

function Portfolio() {
  return <Work projects={projects} />;
}

export default Portfolio;
