import { useState, useEffect } from "react";
import FavCard from "./FavCard/FavCard";

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
        {
            books.map(book =>{
                return <FavCard books={book} getFavoriteListHandler={getFavoriteListHandler}/>
            })
        }
        </>
    )
}