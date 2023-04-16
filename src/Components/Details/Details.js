import DetailsRender from '../DetailsRender/DetailsRender'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function Details(props){
    let { id } = useParams();
  

    return (
        
        <>
        {

            console.log("before")

        }
        {
            
        props.books.map((books) => {
            console.log("aftwer");
            if (books.bookID === id) {
                return (
                    <DetailsRender book = {books}/>
                )
              }
 
        })
    }
        </>
  
        
          
        
      );
}