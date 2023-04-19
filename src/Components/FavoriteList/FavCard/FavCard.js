import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

export default function FavCard(props) {

    const navigate = useNavigate();

    async function deleteFromFavHandler() {
        let url = `${process.env.REACT_APP_SERVER_URL}/removeFromFavorit`;
        const userInfo = JSON.parse(localStorage.getItem("userData"));
        const addFavData = {
            "email": userInfo.email,
            "bookID": props.books.bookID
        }
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(addFavData),
        })
        alert(`the book ${props.books.title} was removed from the list`);
        props.getFavoriteListHandler();
    }

    function showBook() {
        navigate(`/bookID/${props.books.bookID}`);
    }

    return (
      <>
        <div id="card">
          <Card id="singlecard" style={{ width: "18rem" }}>
            <Card.Body id="cardbody">
              <Card.Title id="card-title">{props.books.title}</Card.Title>
              <Card.Text id="card-description">
                {props.books.description}
              </Card.Text>
              <Button
                id="card-show-button"
                variant="primary"
                onClick={() => showBook()}
              >
                SHOW
              </Button>

              <Button
                id="card-remove-to-fav-button"
                variant="primary"
                onClick={() => deleteFromFavHandler()}
              >
                &#x2665;

              </Button>
<div id="myMessage">remove book </div>
            </Card.Body>
            <Card.Img
              id="card-image"
              variant="top"
              src={props.books.book_image}
            />
          </Card>
        </div>
      </>
    );
}