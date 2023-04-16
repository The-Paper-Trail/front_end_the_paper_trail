
import React from "react";
import Signin from "./Components/Signin/Signin";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Signup from "./Components/Signup/Signup";
import Header from "./Components/Header/Header";

function Switch() {
const [currentForm, setcurrentForm] = useState("signin");

function toggleForm (formName) {
  setcurrentForm(formName);
};

  return (
    <>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        {currentForm == "signin" ? (
          <Signin onFormSwitch={() => toggleForm(currentForm)} />
        ) : (
          <Signup onFormSwitch={() => toggleForm(currentForm)} />
        )}
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/favList" element={<FavList />} /> */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default Switch;
