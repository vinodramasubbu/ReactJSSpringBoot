import React, { useState, useEffect } from 'react';
import axios from 'axios';


function AddMovies() {

    const [movies, setMovies] = useState([]);
    const [Title, setTitle] = useState('');
    const [ReleaseDate, setReleaseDate] = useState('');
    const [Genre, setGenre] = useState('');
    const [Price, setPrice] = useState('');

    /*
        const addMovie = (e) => {
        //e.preventDefault();
        axios.post('http://localhost:8080/movies', {
            title: Title,
            genre: Genre,
            price: Price,
            releasedate: ReleaseDate
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }
    */
    async function addMovie(e) {

            e.preventDefault();
            console.log("Title: " + Title);
            console.log("Genre: " + Genre);
            console.log("Price: " + Price);
            console.log("Release Date: " + ReleaseDate);
            console.log("Movie: " + movies);

            axios.post('http://localhost:8080/movies', {
                title: Title,
                genre: Genre,
                price: Price,
                releasedate: ReleaseDate
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
            
        window.location.reload(false);
    
    }


return (
<div>
           <div>
                <h1>Add Movie</h1>
                
                    <label>Title : </label>
                    <input type="text" name="title" value={Title} onChange={(e) => setTitle(e.target.value)}  />
                    <label>Genre : </label>
                    <input type="text" name="genre" value={Genre} onChange={(e) => setGenre(e.target.value)} />
                    <label>Price : </label>
                    <input type="text" name="price" value={Price} onChange={(e) => setPrice(e.target.value)} />
                    <label>Release Date : </label>
                    <input type="text" name="releasedate" value={ReleaseDate} onChange={(e) => setReleaseDate(e.target.value)} />    
            </div>
            <div>
                    <button type='submit' onClick={addMovie}>Add Movie</button>
            </div>
    </div>

           
    );
}

export default AddMovies;