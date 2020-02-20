import {FETCH_PERSON} from "../actionCreators/actionCreators";

let initialState = {
    PersonData:{},
    PersonBackgroundImg : ''
}

let Person = (state=initialState,{type,payload}) =>{
    switch (type) {
        case FETCH_PERSON:{
            return{
                ...state,
                PersonData:payload.person,
                PersonBackgroundImg: payload.PersonBackground.results[0]?  payload.PersonBackground.results[0].file_path :null
            }
        }
        default : return state
    }
}

export default Person