import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './Row.css';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    // A snippet of code which runs whenever certain condition occurs
    useEffect(() => {
        // When '[]' in the end is without any parameters, this snippet runs only once
        // at the time of reloading

        // We have to make a async function for hitting the URL because we are under the useEffect
        // and normal fetching does not work inside useEffect
        async function fetchData() {
            // await is for waiting and not performing any other task until and unless
            // we get a response from API, no matter how long it takes
            const request = await axios.get('https://api.themoviedb.org/3' + fetchUrl);
            // console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
        // console.log(movies);
        // fetchUrl is passed in bracket below because of its dependency int useEffect
        // if we don't pass it, program won't know that it has to reload whenever the fetchUrl is changing, 
        // resulting into showing same movies even when called with different Url this time
    }, [fetchUrl])

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if(trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || movie?.title || '')
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => console.log(error));
        }
    };

    return (
        <div className = "row">
            <h2>{title}</h2>
            <div className = "row_posters">
                {
                    movies.map(movie => (
                        <img 
                        key = {movie.id}
                        onClick = {() => handleClick(movie)}
                        className = {`row_poster ${isLargeRow && "row_posterlarge"}`} 
                        src = {`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt = {movie.name} 
                        />
                ))}
            </div>
            {trailerUrl && <YouTube videoId = {trailerUrl} opts = {opts} />}
        </div>
    )
}

export default Row;