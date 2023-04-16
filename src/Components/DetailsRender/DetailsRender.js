import { Card } from "react-bootstrap"
import Button from "react-bootstrap"

export default function DetailsRender(props) {




  return (


    <>


      {<Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.book.book_image} />
        <Card.Body>        <Card.Title>{props.book.title}</Card.Title>
          <Card.Text>{props.book.description}</Card.Text>

        </Card.Body>
      </Card>}

    </>


  )
  }
