import './App.css';
import Signin from './Components/Signin/Signin';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Signup from './Components/Signup/Signup';
import Header from './Components/Header/Header';


function App() {
const [currentForm, setcurrentForm] = useState("signin");

const toggleForm = (formName) => {
  setcurrentForm(formName);
};



  return (
    <>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        {/* {currentForm === "signin" ? (
          <Signin onFormSwitch={toggleForm} />
        ) : (
          <Signup onFormSwitch={toggleForm} />
        )} */}
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
