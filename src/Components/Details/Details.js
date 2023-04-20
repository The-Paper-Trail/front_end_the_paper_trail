
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
// import Dropdown from 'react-bootstrap/Dropdown';
import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "./Details.css" 



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
            <div id="show">
                <div id="homeline"></div>
                <div id="card">
                    {
                        books.map(books => {
                            if (books.bookID == id) {
                                return (
                                    <Card id="singlecard" style={{ width: '18rem' }}> 
                                        <Card.Body id="cardbody">
                                            <Card.Text class="card-description">
                                                Author : {books.author}
                                                <br />
                                                {/* </Card.Text> */}
                                                {/* <Card.Text class="card-description"> */}
                                                Description about the book :{books.description}
                                                <br />
                                                {/* </Card.Text> */}
                                                {/* <Card.Text class="card-description"> */}
                                                Publisher : {books.publisher}
                                                <br />
                                                {/* </Card.Text> */}
                                                {/* <Card.Text class="card-description"> */}
                                                Contribution {books.contributor}
                                                <br />
                                                {/* </Card.Text> */}
                                                {/* <Card.Text class="card-description"> */}
                                                Are you thinking of buying it?
                                                {/* </Card.Text> */}
                                                {/* <Card.Text class="card-description"> */}
                                            </Card.Text>
                                            <label id="dropdownLabel" for="drop">Choose site to buy from</label>
                                            <Dropdown id="drop" title="Buy">
                                                <Dropdown.Item
                                                    target="_blank"
                                                    class="item"
                                                    as="a"
                                                    href={books.amazon_link}
                                                >
                                                    Amazon
                                                </Dropdown.Item>

                                                <Dropdown.Item
                                                    target="_blank"
                                                    class="item"
                                                    as="a"
                                                    href={books.apple_books_link}
                                                >
                                                    Apple Books
                                                </Dropdown.Item>

                                                <Dropdown.Item
                                                    target="_blank"
                                                    class="item"
                                                    as="a"
                                                    href={books.barnes_and_noble_link}
                                                >
                                                    Barnes and Noble
                                                </Dropdown.Item>
                                            </Dropdown>
                                        </Card.Body>
                                        <Card.Img
                                            id="card-image"
                                            variant="top"
                                            src={books.book_image}
                                        />
                                    </Card>
                                );
                            }

                        })
                    }
                </div>
            </div>
        </>


    );
}