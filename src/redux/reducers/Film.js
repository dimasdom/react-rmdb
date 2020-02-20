import {FETCH_FILM} from "../actionCreators/actionCreators";

let initialState = {
    Details:{},
    Credits:[],
}

let Film =  ( state=initialState ,{type,payload})=>{
    switch (type) {
        case FETCH_FILM: {
            return{
                ...state,
                Details : {...payload.details},
                Credits: {...payload.credits},
            }
        }
        default : return state
    }
}

export default Film