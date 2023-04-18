import Cards from "../Cards/Cards";
import { useState, useEffect } from "react";
import "./Home.css";

export default function Home() {
  const [books, setBooks] = useState([]);

  async function getBooks() {
    const url = process.env.REACT_APP_SERVER_URL;
    const response = await fetch(`${url}/getbooks`);
    const booksData = await response.json();

    setBooks(booksData);
  }
  useEffect(() => {
    getBooks();
  }, []);
  return (
    <>
      <div id="home">
        <h1 id="booksheader">Books</h1>
        <div id="homeline"></div>
        <Cards id="bookscard" books={books} />
      </div>
    </>
  );
}
