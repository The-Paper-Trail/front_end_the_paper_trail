import React from "react";
import "./Footer.css";
import gitorq from "./github.png";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Contact us: <a href="tel:+1234567890">+1 (234) 567-890</a>
      </p>

      <a id="git" href="https://github.com/The-Paper-Trail" target="_blank">
        <img class="link4" src={gitorq} alt=""></img>
      </a>

      <p>
        Email:{" "}
        <a id="email" href="mailto:info@peakperformers.com">info@peakperformers.com</a>
      </p>
      <div id="linefoot"></div>
      <p>&copy; 2023 Peak Performers. All rights reserved.</p>
    </footer>
  );
}
