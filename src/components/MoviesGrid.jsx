import { MoviesCard } from "./MoviesCard.jsx";
import movies from "../json/movies.json";
import "./MoviesGrid.css";

export const MoviesGrid = () => {
    return (
        <ul className="moviesGrid">
            { movies.map ((movie) => (
                <MoviesCard key={movie.id} movie={movie}/>
            ))}
        </ul>
    );
};