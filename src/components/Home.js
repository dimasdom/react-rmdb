import React, {useEffect} from 'react'
import HeroImage from "./elements/HeroImage";
import Search from "./elements/Search";
import Grid from "./elements/Grid";
import MovieThumb from "./elements/MovieThumb";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import Spinner from "./elements/Spinner";
import {getCurrentPage, getHeroImageMovie, getMovies, getSearch} from "../redux/selectors/selectors";
import {fetchMoreMovie, fetchMoreSearchMovie, fetchMoviesThunk, fetchSearchMovie} from "../redux/thunks/thunksCreator";
import {connect} from "react-redux";
import {BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE} from "../config";
import NoImage from "./images/no_image.jpg"

const Home = (props) => {
    const useFetching = someFetchActionCreator => {
        useEffect( () => {
            someFetchActionCreator();
        }, [])
    }
    useFetching(props.fetchMoviesThunk)
    return (
        <>

            {props.HeroImageMovie?
                <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.HeroImageMovie.backdrop_path}`}
                           title={props.HeroImageMovie.title}
                           text={props.HeroImageMovie.overview} />
                           : <Spinner/>}
            <Search fetchSearchMovie={props.fetchSearchMovie}/>
            <Grid header={props.SearchStatus?"Search Results":"Popular Movies"} >
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

            <LoadMoreBtn fetchMoreMovie={props.SearchStatus?props.fetchMoreSearchMovie:props.fetchMoreMovie} SearchStatus={props.SearchStatus} CurrentPage={props.CurrentPage} />
        </>
    )
}

let mapStateToProps = state =>({
    movies : getMovies(state) ,
    HeroImageMovie : getHeroImageMovie(state),
    CurrentPage : getCurrentPage(state),
    SearchStatus :getSearch(state),
})
let mapDispatchToProps = {
    fetchMoviesThunk: fetchMoviesThunk,
    fetchMoreMovie:fetchMoreMovie,
    fetchSearchMovie : fetchSearchMovie,
    fetchMoreSearchMovie:fetchMoreSearchMovie,
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)