import React from "react"
import No_image from "../images/no_image.jpg"
import {IMAGE_BASE_URL,POSTER_SIZE} from "../../config";
import MovieThumb from "./MovieThumb";
import {StyledMovieInfo} from "../styles/StyledMovieInfo";
const MovieInfo = ({movie,Director}) => {
    debugger
    let DirectorShowing = []
    console.log(DirectorShowing)
    return (

        <StyledMovieInfo backdrop={movie.backdrop_path}>
            <div className={"movieinfo-content"}>
                <div className={"movieinfo-thumb"}>
                    <MovieThumb
                        image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : No_image}
                        clickable={false}
                    />
                </div>
                <div className={"movieinfo-text"}>
                    <h1>{movie.title}</h1>
                    <h3>PLOT</h3>
                    <p>{movie.overview}</p>

                    <div className={"rating-director"}>
                        <div>
                            <h3>IMDB RATING</h3>
                            <div className={"score"}>{movie.vote_average}</div>
                        </div>
                        <div className={"director"}>
                            <h3>DIRECTORS</h3>
                            {
                                Director === "None" ? "None"  : Director.map(m=> <p key={m.credit_id}>{m.name}</p>)

                            }
                        </div>
                    </div>
                </div>
            </div>
        </StyledMovieInfo>)
}
export default MovieInfo
