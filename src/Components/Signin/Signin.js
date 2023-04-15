import React, { useState } from "react";
import "../Signup/Signup.css";
// import axios from "axios";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
// import InputGroup from "react-bootstrap/InputGroup";


export default function Signin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <>
      <div className="auth">
        <form className="signform" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            id="email"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            id="password"
          />
          <Button
         variant="primary" className="submit" type="submit">
            Sign In
          </Button>
        </form>

        <button

          onClick={() => props.onFormSwitch("Signup")}
          className="Signbutton"
          type="submit"
        >
          Don't have an account? Sign up
        </button>
      </div>
    </>
  );
}
