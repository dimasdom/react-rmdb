import {
    FETCH_MORE_MOVIES,
    FETCH_MORE_SEARCH_MOVIES,
    FETCH_MOVIES,
    FETCH_SEARCH_MOVIES
} from "../actionCreators/actionCreators";
let initialState = {
    Films : [] ,
    currentpage : 2 ,
    search: '',
}

export  let Movies = ( state=initialState ,{type,payload}) =>{
    switch (type) {
        case FETCH_MOVIES : {
            return{
                ...state,
                Films:payload
            }
        }
        case FETCH_MORE_MOVIES : {
            return{
                ...state ,
                Films: [...state.Films,...payload],
                currentpage : state.currentpage + 1
            }
        }
        case FETCH_SEARCH_MOVIES :{
            return{
                ...state,
                Films:payload.movies,
                search : payload.search
            }
        }
        case FETCH_MORE_SEARCH_MOVIES :{
            return{
                ...state,
                Films:payload.movies,
                search : payload.search,
                currentpage : state.currentpage + 1
            }
        }
        default : return state
    }
}