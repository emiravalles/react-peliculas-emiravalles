import { useParams, useNavigate } from "react-router-dom";
import movies from "../json/movies.json";
import "./MoviesInfo.css";

const formatDate = (date) => {
    return date.substr(8, 2) + "/" + date.substr(5, 2) + "/" + date.substr(0, 4);
};

const fullLanguage = (language) => {
    switch (language) {
        case "en":
            return "English";
        case "fr":
            return "French";
        case "es":
            return "Spanish";
        case "ko":
            return "Korean";
        case "sv":
            return "Swedish";
        default:
            return "Unknown";
    }
};

export function MoviesInfo () {
    const { id } = useParams();
    const movie = movies.filter(movie => movie.id.toString() === id.toString()).shift();
    const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

    const navigate = useNavigate();

    return (
            <div className="body">
                <div className="container">
                    <div className="imageMovie">
                        <img className="imagePoster" src={imgUrl} alt={movie.title} />
                    </div>
                    <div className="movieDetails">
                        <h1 className="movieTitle">{movie.title}</h1>
                        <p className="overview" >{movie.overview}</p>
                        <ul className="listDetails">
                            <li className="detailsTitle"></li>
                            <li className="detailsTitle"><u>Original Title:</u> {movie.original_title}</li>
                            <li className="detailsTitle"><u>Original Language:</u> {fullLanguage(movie.original_language)}</li>
                            <li className="detailsTitle"><u>Rating:</u> {movie.vote_average}</li>
                            <li className="detailsTitle"><u>Release date:</u> {formatDate(movie.release_date)}</li>
                        </ul>
                    </div>
                </div>
                <button className="backButton" onClick={() => navigate(-1)}>Go back</button>
            </div>
    );
};