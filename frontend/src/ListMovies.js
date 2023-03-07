import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateMovies from './UpdateMovies';

function ListMovies() {

    const [movies, setMovies] = useState([]);

    const [Id, setId] = useState('');
    const [Title, setTitle] = useState('');
    const [ReleaseDate, setReleaseDate] = useState('');
    const [Genre, setGenre] = useState('');
    const [Price, setPrice] = useState('');
    const [Loading, setLoading] = useState('');


    useEffect(() => {
        axios.get('http://localhost:8080/movies')
            .then(res => {
                setMovies(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    async function deleteMovie(e)  {
        
        axios.delete('http://localhost:8080/movies/' + e.id)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        console.log("Delete Movie: " + e.id);
        window.location.reload(false);

    }   

    async function saveMovie(e) {

        console.log("save Id: " + Id);
        console.log("save Title: " + Title);
        console.log("save Genre: " + Genre);
        console.log("save Price: " + Price);
        console.log("save Release Date: " + ReleaseDate);

        setLoading(true);

    }   


    async function updateMovie(e) {
        //window.location.reload(false);
        setLoading(false);
 
        setId(e.id);
        setTitle(e.title);
        setGenre(e.genre);
        setPrice(e.price);
        setReleaseDate(e.releasedate);
        console.log("Id: " + Id);
        console.log("Title: " + Title);
        console.log("Genre: " + Genre);
        console.log("Price: " + Price);
        console.log("Release Date: " + ReleaseDate);


    }   

   return (
        <div>

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
                            <tr key={movie.id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre}</td>
                                <td>{movie.price}</td>
                                <td>{movie.releasedate}</td>
                                <td> <button type='submit' onClick={e => updateMovie(movie)}>Update</button> </td>
                                <td> <button type='submit' onClick={e => deleteMovie(movie)}>Delete</button> </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
               {Loading ? (
                   <h4>...</h4>) :
                <div>
                    <div>
                    <h4>Update and Save records</h4>
                    </div>
                   <label>Id : </label>
                   <input type="text" name="Id" value={Id} />
                   <label>Title : </label>
                   <input type="text" name="title" value={Title} />
                   <label>Genre : </label>
                   <input type="text" name="genre" value={Genre}  />
                   <label>Price : </label>
                   <input type="text" name="price" value={Price}  />
                   <label>Release Date : </label>
                   <input type="text" name="releasedate" value={ReleaseDate}  />    
                   <td> <button type='submit' onClick={e => saveMovie(Id,Title,Genre,Price,ReleaseDate)}>Save</button> </td>
                </div>
            }
            </div>
        </div>
    );
}

export default ListMovies;