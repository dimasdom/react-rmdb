// ACTION TYPES
export const FETCH_MOVIES = "FETCH_MOVIES";
export const FETCH_MORE_MOVIES = "FETCH_MORE_MOVIES";
export const FETCH_SEARCH_MOVIES = "FETCH_SEARCH_MOVIES"
export const FETCH_MORE_SEARCH_MOVIES ="FETCH_MORE_SEARCH_MOVIES";
//

export const fetchMoviesAC = movies => ({type:FETCH_MOVIES,payload:movies});
export const fetchMoreMoviesAC = movies => ({type:FETCH_MORE_MOVIES,payload:movies});
export const fetchSearchMovieAC = (movies,search) =>({type:FETCH_SEARCH_MOVIES,payload:{movies,search}})
export const fetchMoreSearchMovieAC = (movies,search) =>({type:FETCH_MORE_SEARCH_MOVIES,payload:{movies,search}})