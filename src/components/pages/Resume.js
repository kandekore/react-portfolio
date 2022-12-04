import React from "react";

import Container from "react-bootstrap/Container";

export default function Resume() {
  return (
    <Container className="mainbody">
      <div className="resumepage">
        <a href="/react-portfolio/assets/Darren_Kandekore_Resume.pdf" download>
          <img src="/react-portfolio/assets/images/pdf.png" />
        </a>
      </div>
    </Container>
  );
}
