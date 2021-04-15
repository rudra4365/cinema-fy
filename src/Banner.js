import React, {useState, useEffect} from 'react'
import axios from './axios'
import requests from './requests'
import './Banner.css'

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchdata() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            // console.log(request.data.results); // 1...2...3... => many movies
            setMovie (
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchdata();
    }, [])

    console.log(movie);

    // To remove the extra long description and add "..." at the end after n characters
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className = "banner"
            style = {{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center",
            }}
        >
            <div className = "banner_contents">
                {/*title*/}
                <h1 className = "banner_title">{movie?.name || movie?.title || movie?.original_name}</h1>
                <div className = "banner_buttons">
                    <button className = "banner_button">Play</button>
                    <button className = "banner_button">My List</button>
                </div>
                <h1 className = "banner_description">
                    {truncate(movie?.overview, 150)}
                </h1>
                {/* div => 2 buttons */}
                {/* description */}
            </div>
            <div className = "banner--fadeBottom">

            </div>
        </header>
    )
}

export default Banner
