// ACTION TYPES
export const FETCH_MOVIES = "FETCH_MOVIES";
export const FETCH_MORE_MOVIES = "FETCH_MORE_MOVIES";
//

export const fetchMoviesAC = movies => ({type:FETCH_MOVIES,payload:movies});
export const fetchMoreMoviesAC = movies => ({type:FETCH_MORE_MOVIES,payload:movies});