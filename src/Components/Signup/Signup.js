import React, { useState } from "react";
import "./Signup.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

export default function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (name.trim() === "") {
      validationErrors.name = true;
    }
    if (email.trim() === "") {
      validationErrors.email = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = true;
    }
    if (password.trim() === "") {
      validationErrors.password = true;
    }

    // Update state with validation errors, if any
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // Make a POST request to the backend API using Axios
      const response = await axios.post("/api/adduser", {
        email: email,
        password: password,
        name: name,
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="auth">
        <Form className="signform" onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              isInvalid={errors.name}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              isInvalid={errors.email}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              isInvalid={errors.password}
            />
          </Form.Group>

          <Button variant="primary" className="submit" type="submit">
            Sign up
          </Button>
        </Form>

        <button
          onClick={() => props.onFormSwitch("signin")}
          className="Signbutton"
          type="submit"
        >
          Already have an account? Sign in
        </button>
      </div>
    </>
  );
}
