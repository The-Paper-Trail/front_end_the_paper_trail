import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

export default function FavCard(props) {

    const navigate = useNavigate();

    async function deleteFromFavHandler() {
        console.log("hello world");
        props.getFavoriteListHandler();
    }

    function showBook() {
        navigate(`/bookID/${props.books.bookID}`);
    }

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.books.book_image} />
                <Card.Body>
                    <Card.Title>{props.books.title}</Card.Title>
                    <Card.Text>{props.books.description}</Card.Text>
                    <Button variant="primary" onClick={()=>showBook()}>SHOW</Button>
                    <Button variant="primary" onClick={() => deleteFromFavHandler()}>REMOVE</Button>
                </Card.Body>
            </Card>
        </>
    )
}