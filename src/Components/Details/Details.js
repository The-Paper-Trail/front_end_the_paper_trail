import { useState, useEffect } from 'react';
import DetailsRender from '../DetailsRender/DetailsRender';
import { useParams } from "react-router-dom";

const Details = () => {
    const [books, setBooks] = useState([]);

    let { id } = useParams();
    useEffect(() => {
        const getBooks = async () => {
            const url = process.env.REACT_APP_SERVER_URL;
            const response = await fetch(`${url}/getbooks`);
            const booksData = await response.json();
            setBooks(booksData);
        }

        getBooks();
    }, []);

    return (
        <>
            {books.map((book) => {
                if (book.bookID == id) {
                    return <DetailsRender book={book} />
                }
            })}
        </>
    );
}

export default Details;
