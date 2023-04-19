import { useState, useEffect } from "react";
import FavCard from "./FavCard/FavCard";
import "./FavoriteList.css"



export default function Favorite() {
    const [books,getBooks] = useState([]);
    async function getFavoriteListHandler(){
        let url =`${process.env.REACT_APP_SERVER_URL}/showFavoriteLists`;
        const response = await fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:localStorage.getItem("userData"),
        })
        const listData = await response.json();
        getBooks(listData);
    }
    useEffect(() => {
        getFavoriteListHandler();
    }, []);
    return (
      <>
      <div id="favpage">

   <h1 id="favheader">Favorite List</h1>
        <div id="favline"></div>
      </div>


        <div className="cards-container">
          {books.map((book) => {
            return (
              <div id="cards" key={book.bookID}>
                <FavCard
                  books={book}
                  getFavoriteListHandler={getFavoriteListHandler}
                />
              </div>
            );
          })}
        </div>
      </>
    );
}