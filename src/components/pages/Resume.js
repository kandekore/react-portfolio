import React from "react";

import Container from "react-bootstrap/Container";

export default function Resume() {
  return (
    <Container className="mainbody">
      <div className="resumepage">
        <a href="/assets/test.pdf" download>
          <img src="/assets/images/pdf.png" />
        </a>
      </div>
    </Container>
  );
}
