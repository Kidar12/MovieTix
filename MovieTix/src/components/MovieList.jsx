import React, {useState} from "react";

import img1 from "../assets/img_1.jpeg";
import img2 from "../assets/img_2.jpeg";
import img3 from "../assets/img_3.jpeg";
import img4 from "../assets/img_4.jpeg";
import img5 from "../assets/img_5.jpeg";
import img6 from "../assets/img_6.jpeg";
import img7 from "../assets/img_7.jpeg";
import img8 from "../assets/img_8.jpeg";

const moviesProperties = [
    { src: img1, title: "Movie 1", format: "2D", ageLimit: "R13+", duration: "2h 30m"},
    { src: img2, title: "Movie 2", format: "2D", ageLimit: "R13+", duration: "2h 30m"},
    { src: img3, title: "Movie 3", format: "2D", ageLimit: "R13+", duration: "2h 30m"},
    { src: img4, title: "Movie 4", format: "2D", ageLimit: "R13+", duration: "2h 30m"},
    { src: img5, title: "Movie 5", format: "2D", ageLimit: "R13+", duration: "2h 30m"},
    { src: img6, title: "Movie 6", format: "2D", ageLimit: "R13+", duration: "2h 30m"},
    { src: img7, title: "Movie 7", format: "2D", ageLimit: "R13+", duration: "2h 30m"},
    { src: img8, title: "Movie 8", format: "2D", ageLimit: "R13+", duration: "2h 30m"},
];


const MovieList = () => {
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 4

    const next = () => {
        if (startIndex + visibleCount < moviesProperties.length) {
            setStartIndex(startIndex + visibleCount);
        }
    }

    const prev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - visibleCount);
        }
    }

    return (
        <div className="carousel-wrapper">
            <h1>Now Showing</h1>
            <div className="carousel">
                <button className="prev-button" onClick={prev}>{'<'}</button>
                <div className="carousel-container">
                    {moviesProperties.slice(startIndex, startIndex + visibleCount).map((movies, index) => (
                    <div className="carousel-item" key={index}>
                        <img src={movies.src} alt={`Movie-${index}`} />
                        <h2 className="movie-title">{movies.title}</h2>
                        <div className="movie-info">
                            <p>
                                {movies.format}
                            </p>
                            <p>
                                {movies.ageLimit}
                            </p>
                            <p>
                                {movies.duration}
                            </p>
                        </div>
                        <div className="movie-button">
                            <button className="watch-trailer-button">
                                <a href="#">Watch Trailer</a>
                            </button>

                            <button className="book-button">
                                <a href="#">Beli Tiket</a>
                            </button>
                        </div>
                    </div>
                    ))}
                </div>
                <button className="next-button" onClick={next}>{'>'}</button>
            </div>
            {/* <button onClick={() => console.log("Show All Movies clicked!")}>Show All Movies</button> */}
        </div>
        
    )
}

export default MovieList;