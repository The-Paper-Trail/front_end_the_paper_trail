import React from "react";
import "./Footer.css";
export default function Footer()  {
  return (
    <footer>
      <p>This is a footer component.</p>
      <p>&copy; 2023 Peak Performers. All rights reserved.</p>
      <p>
        Contact us: <a href="tel:+1234567890">+1 (234) 567-890</a>
      </p>
      <p>
        Email:{" "}
        <a href="mailto:info@peakperformers.com">info@peakperformers.com</a>
      </p>
    </footer>
  );
};
