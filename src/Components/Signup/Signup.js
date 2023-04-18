import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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

   
    await signupHandler();

  };

  async function signupHandler() {
    let url = `${process.env.REACT_APP_SERVER_URL}/addUser`;
    let data = {
      email: email,
      password: password,
      username: name
    };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
     await response.json();
    if (response.status === 201) {
      navigate("/signin");
      

      alert( "Your account has been successfully created.");
    } else if (response.status === 200) {
      alert("your email is allready exsest");

    }
    else{
      alert( "Sorry, we were unable to create your account at this time. Please try again later.");
    }
  }
useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData) {
      navigate("/", { replace: true });
    }
  }, []);



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

      <Nav>

        <Nav.Link href="/signin" id="signin">
          Already have an account? Sign in
        </Nav.Link>
      </Nav>

    </div>
  </>
);
}
