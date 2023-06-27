import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { useEffect, useState } from "react";

const imageURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
    const [liked, setLiked] = useState(false);

    const handleLikeClick = () => {
        const updatedLiked = !liked;

        setLiked(updatedLiked);
        const likedMovie = {
            ...movie,
            liked: updatedLiked
        };

        if(updatedLiked) {
            return sessionStorage.setItem(movie.id.toString(), JSON.stringify(likedMovie));
        }

        return sessionStorage.removeItem(movie.id.toString());
    };

    useEffect(() => {
        const likedMoviesData = Object.keys(sessionStorage).map((key) => {
            return JSON.parse(sessionStorage.getItem(key));
        });

        likedMoviesData.map((storage) => {
            if (storage.id === movie.id) {
                setLiked(storage.liked);
            }
        });
    }, []);

    return (
        <div className="movie-card">
            <img src={imageURL + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>
                <FaStar /> {movie.vote_average}{" "}
                <AiFillLike
                    onClick={handleLikeClick}
                    style={{ color: liked ? "#820107" : "#fff" }}
                />
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </div>
    );
};

export default MovieCard;
