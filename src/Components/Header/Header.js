import "./Header.css";
import NavBar from "../Navbar/NavBar.js"
export default function Header(){

    return (
      <>
        <div id="header">
          <NavBar />
          <div id="line"></div>
          <h2 id="quote">
            <div id="reader">A reader </div>
            <div id="lives">lives a thousand lives</div>
            <div id="before">
              before he dies ,The man who never reads lives <br />
              only one.
            </div>
          </h2>
          <p id="writer">-George R.R. Martin</p>
          <div id="line2"></div>
        </div>
      </>
    );
}