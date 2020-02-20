import {fetchFilmAC, fetchMoreMoviesAC, fetchMoviesAC, fetchSearchMovieAC} from "../actionCreators/actionCreators";
import {
    getFilmCreditsByIdAPI,
    getFilmDetailsByIdAPI,
    getMoreMoviesAPI,
    getMoreSearchMoviesAPI,
    getMoviesAPI,
    getSearchResultMovieAPI
} from "../api/api";

export const fetchMoviesThunk = () => async (dispatch) =>{
    let Movies = await getMoviesAPI();
    dispatch(fetchMoviesAC(Movies))
}

export const fetchMoreMovie = (page) => async (dispatch)=>{
    let Movies = await getMoreMoviesAPI(page);
    dispatch(fetchMoreMoviesAC(Movies))
}

export const fetchSearchMovie = (search) => async (dispatch)=>{
    let Movies = await getSearchResultMovieAPI(search);
    dispatch(fetchSearchMovieAC(Movies,search))
}

export const fetchMoreSearchMovie = (page,search) => async (dispatch)=>{
    let Movies = await getMoreSearchMoviesAPI(search,page);
    dispatch(fetchMoreMoviesAC(Movies))
}

export const fetchFilm = id => async (dispatch) =>{
    let FilmDetails = await getFilmDetailsByIdAPI(id);
    let FilmCredits = await getFilmCreditsByIdAPI(id);
    dispatch(fetchFilmAC(FilmDetails,FilmCredits))
}