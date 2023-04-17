import SingleCard from '../SingleCard/SingleCard'



export default function Cards(props){

    return(

        
        <>
       <div >
    {
        props.books.map(book => {
          return(
          <div key={book.bookID}>

          {/* <Link to={`/bookID/${book.bookID}`}> */}

          <SingleCard books={book} />
          
          {/* </Link> */}


          </div>

          )

        })
      }
    </div>
        </>
    )

}