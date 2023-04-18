import Cards from '../Cards/Cards'
import{ useState, useEffect } from 'react';



export default function Home (){

    const [books,setBooks]=useState([]);

    async function getBooks(){


        const url=process.env.REACT_APP_SERVER_URL;
        const response = await fetch(`${url}/getbooks`);
        const booksData = await response.json();
        
       
        setBooks(booksData);

    }
    useEffect(()=>{
        getBooks();
    },[])  
    return(
        <>
        <Cards    books={books} />
        </>
    )
}
