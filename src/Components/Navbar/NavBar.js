


import { Nav } from "react-bootstrap";
import "./NavBar.css"
// import { useState } from "react";

export default function NavBar() {
//   const [view, setViwe] = useState(true);
//   function viweHandler(e) {
//     e.preventDefault();

//     setViwe(!view)
// }

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
        {/* {view && <text  className="boton" onClick={(e) => viweHandler(e)}> Sign In </text>}
          {!view &&  <text className="boton" onClick={(e) => viweHandler(e)}>logaut </text>} */}
        </div>
      </Nav>

    </>
  );
}