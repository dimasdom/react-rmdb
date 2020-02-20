import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {Movies} from "./reducers/Movies";
import { composeWithDevTools } from 'redux-devtools-extension';
import Film from "./reducers/Film";
import Person from "./reducers/Person";
const middlewares = [thunk];
let reducers = combineReducers({
    Movies : Movies,
    Film : Film,
    Person:Person,
})

export let state = createStore(reducers,composeWithDevTools(applyMiddleware(...middlewares)));