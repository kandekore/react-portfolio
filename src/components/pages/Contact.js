import React, { useState } from "react";
import Container from "react-bootstrap/Container";

function FormExample() {
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    // const { name, value } = e.target;
    // return name === "name" ? setName(value) : setName(value);
    if (this.trim().length !== 0) {
      console.log("input value is NOT empty");
    } else {
      alert("hic input value is empty");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      message.trim().length !== 0 &&
      name.trim().length !== 0 &&
      emailAddress.trim().length !== 0
    ) {
      alert(`Thank you ${name}, I will be in touch soon`);
      setName("");
      setEmailAddress("");
      setMessage("");
    } else {
      alert("All fields are required");
    }
  };

  return (
    <Container className="mainbody">
      {" "}
      <p className="headersub">Hi {name}, I can't wait to hear from you!</p>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            name="firstName"
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value, { handleInputChange })}
          />

          <input
            name="emailaddress"
            type="email"
            value={emailAddress}
            placeholder="Email Address"
            onChange={(e) =>
              setEmailAddress(e.target.value, { handleInputChange })
            }
          />

          <textarea
            type="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value, { handleInputChange })}
          />

          <input type="submit" />
        </form>
      </div>
    </Container>
  );
}

export default FormExample;
