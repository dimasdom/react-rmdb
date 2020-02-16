import React, {useEffect} from 'react'

import Header from "./elements/Header";
import HeroImage from "./elements/HeroImage";
import Search from "./elements/Search";
import Grid from "./elements/Grid";
import MovieThumb from "./elements/MovieThumb";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import Spinner from "./elements/Spinner";
import {getCurrentPage, getHeroImageMovie, getMovies} from "../redux/selectors/selectors";
import {fetchMoreMovie, fetchMoviesThunk} from "../redux/thunks/thunksCreator";
import {connect} from "react-redux";
import {BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE} from "../config";
import NoImage from "./images/no_image.jpg"
const Home = (props) => {
    debugger
    useEffect(async () => props.fetchMoviesThunk(),[])
    return (
        <>
            <Header/>
            {props.HeroImageMovie?
                <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.HeroImageMovie.backdrop_path}`}
                           title={props.HeroImageMovie.title}
                           text={props.HeroImageMovie.overview} />
                           : <Spinner/>}
            <Search/>
            <Grid header={"Popular Movies"} >
                {props.movies.map(movie =>(
                    <MovieThumb
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` :
                                NoImage
                        }
                        movie_id={movie.id}
                        movie_name={movie.original_titile}
                    />
                ))}
            </Grid>

            <LoadMoreBtn fetchMoreMovie={props.fetchMoreMovie} CurrentPage={props.CurrentPage} />
        </>
    )
}

let mapStateToProps = state =>({
    movies : getMovies(state) ,
    HeroImageMovie : getHeroImageMovie(state),
    CurrentPage : getCurrentPage(state),
})
let mapDispatchToProps = {
    fetchMoviesThunk: fetchMoviesThunk,
    fetchMoreMovie:fetchMoreMovie
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)