
import Cards from '../Cards/Cards'
import{ useState, useEffect } from 'react';



export default function Home (){

    const [books,setBooks]=useState([]);

    async function getBooks(){


        const url=process.env.REACT_APP_SERVER_URL;
        const response = await fetch(`${url}/getbooks`);
        const booksData = await response.json();
        console.log("data as json" ,booksData);
        
       
        setBooks(booksData);
        console.log("data from state",books);

    }
    useEffect(()=>{
        getBooks();
    },[])  
    return(
        <>
        {/* <Navbar /> */}
        <Cards  books={books} />
        {/* <Footer/> */}
       
      
        </>
    )
}

