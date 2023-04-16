import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";




export default function SingleCard(props) {

    
  return (
    <>
   <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src={props.book.book_image} />
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
        <Card.Text>{props.book.description}</Card.Text>
        <Button variant="primary">SHOW</Button>
        <Button variant="primary">ADD TO FAV</Button>
        
      </Card.Body>
    </Card>

    </>
  );
}