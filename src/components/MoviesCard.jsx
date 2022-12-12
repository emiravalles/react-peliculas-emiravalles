import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./MoviesCard.css";

const MySwal = withReactContent(Swal);

const showDescription = (title, description, image) => {
    MySwal.fire({
        title: title,
        text: description,
        imageUrl: image,
        imageWidth: 200,
        imageHeight: 300,
        imageAlt: title,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Close'
    })
}

export function MoviesCard ({movie}) {
    const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        <li className="movieCard">
            <img className="movieImage" src={imgUrl} alt={movie.title} onClick={()=>{showDescription(movie.title, movie.overview, imgUrl)}} />
            <div className="movieTitle">{movie.title}</div>
        </li>
    );
};