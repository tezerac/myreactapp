import {useEffect, useState} from "react";
import './App.css';
import searchIcon from './search.svg';
import MovieCard from "./MovieCard";

//8271d079

const API_URL = 'http://www.omdbapi.com?apikey=8271d079';
// const movie1 = {
    
//         "Title": "Title Shot",
//         "Year": "1979",
//         "imdbID": "tt0080027",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BNjExZjNjOTctNDdmMC00NWRlLWE1MzctOTkxN2MyNTE4NzRiXkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_SX300.jpg"
      
//         }

const App = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        searchMovies('spiderman');
    },[])
  
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    };
    return (
       <div className="app">
        <h1>MovieLand</h1>
            <div className="search">
                <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for movies"
                />
            <img
                src={searchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)}
            />
            </div>
            
            {movies?.length > 0 ? (
                <div className="container">
                {movies.map((movie) => (
                 <MovieCard movie={movie} />
                ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
        </div>  
    );
};

export default App;