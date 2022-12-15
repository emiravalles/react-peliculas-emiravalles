import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link } from "react-router-dom";
import "./MoviesCard.css";

const MySwal = withReactContent(Swal);

const showDescription = (title, description, image, id) => {
    MySwal.fire({
        title: title,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },
        text: description,
        imageUrl: image,
        imageWidth: 200,
        imageHeight: 300,
        imageAlt: title,
        confirmButtonColor: '#000080',
        confirmButtonText: 'Close'
    })
}

export function MoviesCard ({movie}) {
    const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

    return (
        <li className="movieCard">
            <img className="movieImage" src={imgUrl} alt={movie.title} onClick={()=>{showDescription(movie.title, movie.overview, imgUrl, movie.id)}} />
            <Link to ={`/react-peliculas-emiravalles/movie/${movie.id}`} className="movieTitle">{movie.title}</Link>
        </li>
    );
};