
import { useParams } from "react-router-dom";
import{ useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";



export default function Details(props){

    const [books,setBooks]=useState([]);
    let { id } = useParams();
    async function getBooks(){


        const url=process.env.REACT_APP_SERVER_URL;
        const response = await fetch(`${url}/getbooks`);
        const booksData = await response.json();
        // console.log("data as json" ,booksData);
        
    //    console.log(typeof booksData)
        setBooks(booksData);
        // console.log("data from state",books);

    }
    useEffect(()=>{
        getBooks();
    },[])  
  
// console.log(books)
    return (
        
        <>
   
        {
            
        books.map(books => {
            // console.log(books.bookID  , id);
            if (books.bookID == id) {
                return (
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={books.book_image} />
                       <Card.Body>
                         <Card.Title>{books.title}</Card.Title>
                         <Card.Text>Author : {books.author}</Card.Text>
                         <Card.Text>Description about the book : <br></br>{books.description}</Card.Text>
                         <Card.Text>Publisher : {books.publisher}</Card.Text>
                         <Card.Text>Contributor : {books.contributor}</Card.Text>
                         <Card.Text>Are you thinking of buying it?</Card.Text>

                       
                     
                         

                         <Button variant="primary">SHOW</Button>


                         <Button variant="primary">ADD TO FAV</Button>
                         
                         
                       </Card.Body>
                     </Card>
                )
              }
 
        })
    }
        </>
  
        
          
        
      );
}