import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Signin from './Components/Signin/Signin';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Signup from './Components/Signup/Signup';



function App() {

const [currentForm,setcurrentForm]= useState("signin");

const toggleForm=(formName)=>{
setcurrentForm(formName);

}

  return (
    <>
      <div className="App">
        {currentForm == "signin" ? (
          <Signin onFormSwitch={toggleForm} />
        ) : (
          <Signup onFormSwitch={toggleForm} />
        )}

        <header className="App-header">
          <NavBar />
          <Routes>
            {/* <Route path="/" element={<Home />} />
          <Route path="/favList" element={<FavList />} /> */}

          </Routes>

        </header>
      </div>
    </>
  );
}

export default App;
