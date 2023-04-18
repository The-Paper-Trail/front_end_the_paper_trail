import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./SingleCard.css";
import { useNavigate } from "react-router-dom";


export default function SingleCard(props) {
  const navigate = useNavigate();

  function showBook() {
    navigate(`/bookID/${props.books.bookID}`);
  }

  async function addToFavorite(e) {
    e.preventDefault();
    let url = `${process.env.REACT_APP_SERVER_URL}/addFavoritesLists`;
    const userInfo = JSON.parse(localStorage.getItem("userData"));
    const addFavData = {
      "email": userInfo.email,
      "bookID": props.books.bookID
    }
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addFavData),
    })
    const listData = await response.json();
    console.log(listData);
  }

  return (
    <>
      <div id="card">
        <Card id="singlecard" style={{ width: '18rem' }}>
          <Card.Body id="cardbody">
            <Card.Title id="card-title">{props.books.title}</Card.Title>
            <Card.Text id="card-description">{props.books.description}</Card.Text>
            <Button id="card-add-to-fav-button" variant="primary" onClick={(e) => addToFavorite(e)}>&#x2665;</Button>
            <Button id="card-show-button" variant="primary" onClick={() => showBook()}>SHOW</Button>
          </Card.Body>
          <Card.Img variant="top" src={props.books.book_image} id="card-image" />
        </Card>
      </div>
    </>
  );
}
