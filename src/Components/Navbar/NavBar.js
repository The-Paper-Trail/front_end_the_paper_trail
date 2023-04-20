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
          <Nav>
            <div id="navbar">
              <Nav.Link id="homenav" href="/">
                Home{" "}
              </Nav.Link>
              <Nav.Link id="favnav" href="/favpage">
                Favorite{" "}
              </Nav.Link>
              <Nav.Link id="profilenav" href="/profile">
                Profile
              </Nav.Link>
              <Nav.Link id="aboutnav" href="/about">
                About Us
              </Nav.Link>



            </div>
           
<Button
              id="signout"
              variant="danger"
              onClick={() => handlesignout()}
            >
              sign out
            </Button>


          </Nav>
        </>
      ) : (
        <>
          <Nav>
            <div id="navbar">
              <Nav.Link id="homenav" href="/">
                Home
              </Nav.Link>
              <Nav.Link id="favnav" href="/favpage">
                Favorite{" "}
              </Nav.Link>
              <Nav.Link id="profilenav" href="/profile">
                Profile
              </Nav.Link>
              <Nav.Link id="aboutnav" href="/about">
                About Us
              </Nav.Link>

            </div>
             <Nav.Link href="/signin" id="signin">
                Sign In
              </Nav.Link>

          </Nav>
        </>
      )}
    </>
  );
}