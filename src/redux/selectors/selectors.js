export const getMovies = state => {
    debugger
    return state.Movies.Films
}

export const getHeroImageMovie = state => {
    return state.Movies.Films[0]
}

export const getCurrentPage = state =>{
    return state.Movies.currentpage
}