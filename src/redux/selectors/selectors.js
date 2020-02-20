//take data from state (store)

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

export const getPerson = state =>{
    return state.Person.PersonData
}
export const getPersonBackimg = state =>{
    return state.Person.PersonBackgroundImg
}