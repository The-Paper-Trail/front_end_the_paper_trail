
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
// import Dropdown from 'react-bootstrap/Dropdown';
import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "./Details.css";



export default function Details(props) {

    const [books, setBooks] = useState([]);
    let { id } = useParams();
    async function getBooks() {


        const url = process.env.REACT_APP_SERVER_URL;
        const response = await fetch(`${url}/getbooks`);
        const booksData = await response.json();
        // console.log("data as json" ,booksData);

        //    console.log(typeof booksData)
        setBooks(booksData);
        // console.log("data from state",books);

    }
    useEffect(() => {
        getBooks();
    }, [])

    // console.log(books)
    return (

        <>
   
        {
            
        books.map(books => {
            // console.log(books.bookID  , id);
            if (books.bookID == id) {
                return (<div id = "divv">
                    <Card id = "card">
                    <Card.Img id = "image" variant="top" src={books.book_image} />
                       <Card.Body id = "bod">
                         <Card.Title id = "tit">{books.title}</Card.Title>
                         <Card.Text id = "tex">Author : {books.author}.</Card.Text>
                         <Card.Text id = "tex">Description about the book : <br></br>{books.description}</Card.Text>
                         <Card.Text id = "tex">Publisher : {books.publisher}.</Card.Text>
                         <Card.Text id = "tex">Contribution {books.contributor}.</Card.Text>
                         <Card.Text id = "tex">Are you thinking of buying it?</Card.Text>
                         <Card.Text id = "tex">Choose site to buy from :</Card.Text>
                         <Dropdown id = "drop"title="Buy">
                                <Dropdown.Item as="a" target="_blank" href={books.amazon_link}>
                                 Amazon
                                </Dropdown.Item>
                  
                                <Dropdown.Item as="a" target="_blank" href={books.apple_books_link}>
                                Apple Books
                                </Dropdown.Item>
                  
                                <Dropdown.Item as="a" target="_blank" href={books.barnes_and_noble_link}>
                                Barnes and Noble
                                </Dropdown.Item>
                            </Dropdown>  
                       </Card.Body>
                     </Card>
                </div>
                )
              }
 
        })
    }
        </>


    );
}