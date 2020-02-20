import React from 'react';
import {StyledMovieThumb} from "./../styles/StyledMovieThumb"
import {Link} from "@reach/router";
const MovieThumb = (props) =>(
    <StyledMovieThumb>
        <Link to={`/${props.movie_id}`}>
        <img src={props.image} />
        </Link>
    </StyledMovieThumb>)

export default MovieThumb