import SingleCard from '../SingleCard/SingleCard'



export default function Cards(props){

    return(
        <>
        {
            props.books.map(book =>{
                return(
                    <SingleCard book={book} />
                )
            })
        }
        </>
    )

}