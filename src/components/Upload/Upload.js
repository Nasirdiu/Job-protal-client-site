import React from "react";
import { Button, Form } from "react-bootstrap";

const Upload = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const description = event.target.description.value;
    const user = { name, description };
    // send data to the server
    fetch("https://aqueous-crag-86187.herokuapp.com/user", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("add user successfully");
        event.target.reset();
      });
  };
  return (
    <div className="container">
      <h1 className="text-center">Upload</h1>
      <div className="w-50 mx-auto">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder=" Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="textarea">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="textarea"
              name="description"
              placeholder="Description"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Upload;
