import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function FavCard(props) {

    async function deleteFromFavHandler(){
        console.log("hello world");
    }

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.books.book_image} />
                <Card.Body>
                    <Card.Title>{props.books.title}</Card.Title>
                    <Card.Text>{props.books.description}</Card.Text>
                    <Link to={`/bookID/${props.books.bookID}`}>
                        <Button variant="primary">SHOW</Button>
                    </Link>
                    <Button variant="primary" onClick={()=>deleteFromFavHandler()}>REMOVE</Button>
                </Card.Body>
            </Card>
        </>
    )
}