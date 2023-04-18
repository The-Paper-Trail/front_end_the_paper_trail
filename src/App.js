import './App.css';
import Signin from './Components/Signin/Signin';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Signup from './Components/Signup/Signup';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home'
import Details from './Components/Details/Details';
import FavPage from './Components/FavoriteList/FavoriteList'
import Profile from './Components/Profile/Profile';
import AboutUs from './Components/AboutUs/AboutUs';



function App() {

  return (
    <>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bookID/:id' element={<Details />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="//favpage" element={<FavPage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
