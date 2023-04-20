import { useState, useEffect } from "react";
import FavCard from "./FavCard/FavCard";
import { useNavigate } from "react-router-dom";
import "./FavoriteList.css"



export default function Favorite() {
  const [books, getBooks] = useState([]);
  const navigate = useNavigate();

  async function getFavoriteListHandler() {
    let url = `${process.env.REACT_APP_SERVER_URL}/showFavoriteLists`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: localStorage.getItem("userData"),
    })
    const listData = await response.json();
    getBooks(listData);
  }
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData) {
      getFavoriteListHandler();
      const firstElement = document.querySelector(".firstElement")
      firstElement.scrollIntoView({ behavior: "smooth", block: "start" })
    } else {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <div className="firstElement">
      <div id="favpage">
        <h1 id="favheader">Favorite List</h1>
        <div id="favline"></div>
      </div>
      <div className="cards-container">
        {Array.isArray(books) && books.length > 0 ? (
          books.map((book) => {
            return (
              <div id="cards" key={book.bookID}>
                <FavCard books={book} getFavoriteListHandler={getFavoriteListHandler} />
              </div>
            );
          })
        ) : (
          <h1 id="noadd">there is no books in your Favorite list</h1>
        )}
      </div>
    </div>
  )
}
