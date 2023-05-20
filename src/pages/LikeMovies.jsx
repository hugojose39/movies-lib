import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

import "./MoviesGrid.css";

const LikeMovies = () => {
    const [likedMovies, setLikedMovies] = useState([]);

    useEffect(() => {
        const likedMoviesData = Object.keys(sessionStorage).map((key) => {
            return JSON.parse(sessionStorage.getItem(key));
        });

        setLikedMovies(likedMoviesData);
    }, []);

    return (
        <div className="container">
            <h2 className="title">Filmes curtidos:</h2>
            <div className="movies-container">
                {likedMovies.length === 0 && <p>Carregando...</p>}
                {likedMovies.length > 0 && likedMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    );
};

export default LikeMovies;