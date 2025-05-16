import React, {useState} from "react";
import { Link } from "react-router-dom";

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
        setStartIndex((prev) => (prev + visibleCount) % moviesProperties.length);
    }

    const prev = () => {
        setStartIndex((prev) => (prev - visibleCount + moviesProperties.length) % moviesProperties.length); 
    }

    // Untuk indikator bar
    const totalPages = Math.ceil(moviesProperties.length / visibleCount);
    const currentPage = Math.floor(startIndex / visibleCount);

    const slicingLooping = () => {
        let result = [];
        for (let i = 0; i < visibleCount; i++){
            result.push(moviesProperties[(startIndex + i) % moviesProperties.length])
        }
        return result;
    }

    return (
        <div className="carousel-wrapper">
            <h1>Now Showing</h1>
            <div className="carousel">
                <button className="prev-button" onClick={prev}>{'<'}</button>
                <div className="carousel-container">
                    {slicingLooping().map((movies, index) => (
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
                                <Link to={`/book/${index}`}>Beli Tiket</Link>
                            </button>
                        </div>
                    </div>
                    ))}
                </div>
                <button className="next-button" onClick={next}>{'>'}</button>
            </div>
            <div className="indicator-carousel">
                {Array.from({ length: totalPages}).map((_, idx) => (
                    <span
                        key = {idx}
                        className={`indicator-dot${idx === currentPage ? " active" : ""}`}
                    ></span>
                ))}
            </div>
        </div>
        
    )
}

export default MovieList;