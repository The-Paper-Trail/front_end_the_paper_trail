import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import "./NavBar.css"
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';


// import { useState } from "react";

export default function NavBar() {
  const navigate = useNavigate();
  const storedData = JSON.parse(localStorage.getItem("userData"));
  function handlesignout() {
    localStorage.removeItem("userData");
    window.location.reload();

  }

  return (
    <>
      {console.log(storedData)}
      {storedData ? (
        <> <Nav>
      
        <div id="navbar">
          <Nav.Link href="/">Home</Nav.Link>
          
          <Nav.Link href="/favpage">Favorite </Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
        <Button variant="danger" onClick={() => handlesignout()}>sign out</Button>{' '}
        </div>
        
      </Nav></>
      ) : (
        <> <Nav>
      
        <div id="navbar">
          <Nav.Link href="/">Home</Nav.Link>
          
          <Nav.Link href="/favpage">Favorite </Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
        <Nav.Link href="/signin" id="signin">
         Sign In
       </Nav.Link>
        </div>
       
      </Nav></>
      )}
    </>
   
  );
}