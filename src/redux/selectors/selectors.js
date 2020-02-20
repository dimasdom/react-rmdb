export const getMovies = state => {
    return state.Movies.Films
}

export const getHeroImageMovie = state => {
    return state.Movies.Films[0]
}

export const getCurrentPage = state =>{
    return state.Movies.currentpage
}

export const getSearch = state =>{
    return state.Movies.search
}

export const getDetails = state =>{
    return state.Film.Details
}

export const getCredits = state =>{
    return state.Film.Credits
}

