import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavBar() {


 return (
   <>
     <Nav>
       <div id="navbar">
         <Nav.Link href="/">Home</Nav.Link>
         <Nav.Link href="/favpage">Favorite </Nav.Link>
         <Nav.Link href="/profile">Profile</Nav.Link>
       </div>
        <div id="inup">
       <Nav.Link href="/signin" id="signin">
         Sign In
       </Nav.Link>
       <Nav.Link href="/signup" id="signup">
         Sign up
       </Nav.Link>
     </div>
     </Nav>

   </>
 );
}