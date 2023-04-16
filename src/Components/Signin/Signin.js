import React, { useState } from "react";
import { Nav } from "react-bootstrap";

import "../Signup/Signup.css";
// import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
// import InputGroup from "react-bootstrap/InputGroup";
export default function Signin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);

    addToFavHandler(e, email, password)
  };

  async function addToFavHandler(e) {
    e.preventDefault();

    let url = `${process.env.REACT_APP_URL}/getUser`;

    let data = {
      email: email,
      password: password
    }
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const receivedData = await response.json();
    
    
    if (response.status === 202) {
      console.log(receivedData)
    const userData = (receivedData[0])
    localStorage.setItem("userData", JSON.stringify(userData));
      alert("successfully added to database")
    }else if((response.status === 200)){
      alert("check email or password")
    }


  }
  return (
    <>
     
      <div className="auth">
        <Form className="signform" onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" className="submit" type="submit">
            Sign In
          </Button>
        </Form>
          <Nav>
            <Nav.Link href="/signup" id="signup">
              Don't have an account? Sign up
            </Nav.Link>
          </Nav>
      </div >
    </>
  );
}
