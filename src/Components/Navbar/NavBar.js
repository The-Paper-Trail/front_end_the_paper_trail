import { Nav } from "react-bootstrap";
import "./NavBar.css"
import Button from 'react-bootstrap/Button';


// import { useState } from "react";

export default function NavBar() {
  const storedData = JSON.parse(localStorage.getItem("userData"));
  function handlesignout() {
    localStorage.removeItem("userData");
    window.location.reload();

  }

  return (
    <>
      {storedData ? (
        <>
          {" "}
          <Nav>
            <div id="navbar">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/favpage">Favorite </Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>

              <Button id="signout" variant="danger" onClick={() => handlesignout()}>
                sign out
              </Button>{" "}
            </div>
          </Nav>
        </>
      ) : (
        <>
          {" "}
          <Nav>

            <div id="navbar">
              <Nav.Link id="homenav" href="/">Home</Nav.Link>

              <Nav.Link id="favnav" href="/favpage">Favorite </Nav.Link>
              <Nav.Link id="profilenav" href="/profile">Profile</Nav.Link>
              <div id="in">
                <Nav.Link href="/signin" id="signin">
                  Sign In
                </Nav.Link>
              </div>

            </div>
          </Nav>
        </>
      )}
    </>
  );
}