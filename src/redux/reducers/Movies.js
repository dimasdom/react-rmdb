import {FETCH_MORE_MOVIES, FETCH_MOVIES} from "../actionCreators/actionCreators";
let initialState = {
    Films : [] ,
    currentpage : 2 ,
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
        default : return state
    }
}