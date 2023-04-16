import DetailsRender from './Components/DetailsRender/DetailsRender';
import Details from './Components/Details/Details'
import Home from './Components/Home/Home'
import {Routes,Route} from  'react-router-dom';



function App() {
  return (
   <>
   
   <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book/:id' element={<Details />} />
      </Routes>
   </>
  );
}

export default App;
