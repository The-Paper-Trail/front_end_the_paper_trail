import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";




export default function SingleCard(props) {

    
  return (
    <>
   <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src={props.books.book_image} />
      <Card.Body>
        <Card.Title>{props.books.title}</Card.Title>
        <Card.Text>{props.books.description}</Card.Text>
        <Button variant="primary">SHOW</Button>
        <Button variant="primary">ADD TO FAV</Button>
        
      </Card.Body>
    </Card>

    </>
  );
}