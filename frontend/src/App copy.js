//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';



function App() {

const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/movies')
      .then(res => {
        setMovies(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const addMovie = (a) => {

    console.log(a);
  }




  return (
    
   // <div className="App">
   //   <header className="App-header">
<div>
         <div>
          <h1>Add Movie</h1>
          <form>
            <label>Title</label>
            <input type="text" name="title" />
            <label>Genre</label>
            <input type="text" name="genre" />
            <label>Price</label>
            <input type="text" name="price" />
            <label>Release Date</label>
            <input type="text" name="releasedate" />
            <button onClick={addMovie("hi")}>Add Movie</button>
          </form>
          </div>

        <div>

   

          <h1>Movie List</h1>

          <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Price</th>
          <th>Release Date</th>
        </tr>
      </thead>
      <tbody>
        {movies.map(movie => (
          <tr key={movie.title}>
            <td>{movie.title}</td>
            <td>{movie.genre}</td>
            <td>{movie.price}</td>
            <td>{movie.releasedate}</td>
            <button>Update</button>
            <button>Delete</button>
          </tr>
        ))}
      </tbody>
    </table>

        </div>
      </div>
   //   </header>
   // </div>
  );
}

export default App;
