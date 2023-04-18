import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Signin.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Signin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
 

    await addToFavHandler();
  };

  async function addToFavHandler() {
    let url = `${process.env.REACT_APP_SERVER_URL}/getUser`;

    let data = {
      email: email,
      password: password,
    };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const receivedData = await response.json();

    if (response.status === 202) {
      const userData = receivedData[0];
      localStorage.setItem("userData", JSON.stringify(userData));
      navigate("/");
    } else if (response.status === 200) {
      alert("check email or password");
    }
  }

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData) {
      navigate("/", { replace: true });
    }else{
      const signForm = document.querySelector(".signform")
      signForm.scrollIntoView({ behavior: "smooth", block: "start" })      
    }
 

  }, []);

  return (
    <>
      <div id="signinpage">
        <div id="story">
          <h1 id="story1">Sign in</h1>
          <p id="story2">and Keep the story going..</p>
        </div>

        <div className="auth">
          <Form className="signform" onSubmit={handleSubmit}>
            {/* <Form.Group controlId="userName">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="User Name"
              />
            </Form.Group> */}
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
            <Button
              variant="primary"
              id="submit"
              className="submit"
              type="submit"
            >
              Sign In
            </Button>
          </Form>
          <Nav>
            <Nav.Link href="/signup" id="signup">
              Don't have an account? Sign up
            </Nav.Link>
          </Nav>
        </div>
      </div>
    </>
  );
}
