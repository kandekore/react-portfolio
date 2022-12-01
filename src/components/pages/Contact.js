import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function FormExample() {
  return (
    <Form>
      <fieldset>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="textInput">Name</Form.Label>
          <Form.Control id="textInput" placeholder=" input" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="textInput"> Email address</Form.Label>
          <Form.Control type="email" placeholder=" Email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            id="fieldsetCheck"
            label="Can't check this"
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </fieldset>
    </Form>
  );
}

export default FormExample;
