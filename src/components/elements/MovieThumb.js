import React from 'react';
import {StyledMovieThumb} from "./../styles/StyledMovieThumb"
const MovieThumb = (props) =>(
    <StyledMovieThumb>

    <img src={props.image} />
    </StyledMovieThumb>)

export default MovieThumb