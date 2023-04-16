import { Route, Routes } from 'react-router';
import './App.css';
import Profile from './components/Profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    {/* <Routes>
      <Route path='/profile' element={<Profile/>} />
    </Routes> */}
    <Profile/>
    </>
  );
}

export default App;
