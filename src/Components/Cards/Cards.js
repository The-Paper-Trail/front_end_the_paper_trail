import SingleCard from '../SingleCard/SingleCard'
import "./Cards.css";


export default function Cards(props){

    return (
      <>
        <div className="cards-container">
          {props.books.map((book) => {
            return (
              <div id="cards" key={book.bookID}>
                {/* <Link to={`/bookID/${book.bookID}`}> */}

                <SingleCard books={book} />

                {/* </Link> */}
              </div>
            );
          })}
        </div>
      </>
    );

}