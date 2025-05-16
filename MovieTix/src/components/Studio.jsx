import React from "react";
import { useParams } from "react-router-dom";

const Studio = () => {
    const { movieId } = useParams();
    // Ambil data film dari array moviesProperties jika perlu
    // Tampilkan detail dan form booking sesuai movieId
    return (
        <div>
            <h1>Book Ticket for Movie {movieId}</h1>
            {/* Tampilkan detail film dan form booking di sini */}
        </div>
    )
}

export default Studio