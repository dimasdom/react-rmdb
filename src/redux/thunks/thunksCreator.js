import {fetchMoreMoviesAC, fetchMoviesAC} from "../actionCreators/actionCreators";
import {getMoreMoviesAPI, getMoviesAPI} from "../api/api";

export const fetchMoviesThunk = () => async (dispatch) =>{
    let Movies = await getMoviesAPI();
    dispatch(fetchMoviesAC(Movies))
}

export const fetchMoreMovie = (page) => async (dispatch)=>{
    let Movies = await getMoreMoviesAPI(page);
    dispatch(fetchMoreMoviesAC(Movies))
}