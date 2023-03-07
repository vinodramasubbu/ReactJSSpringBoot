//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';
import ListMovies from  "./ListMovies";
import AddMovies from "./AddMovies";


function App() {

return (
  <div>

    <AddMovies />
    <ListMovies />
    
  </div>  
)
 
}

export default App;
