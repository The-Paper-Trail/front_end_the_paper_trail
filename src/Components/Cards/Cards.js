import SingleCard from '../SingleCard/SingleCard'



export default function Cards(props){

    return(

        
        <>
       <div >
    {
        props.books.map(book => {
          return(
          <div key={book.bookID}>

          <SingleCard books={book} />
          
    


          </div>

          )

        })
      }
    </div>
        </>
    )

}