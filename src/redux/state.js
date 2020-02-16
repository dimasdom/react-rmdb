import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {Movies} from "./reducers/Movies";
import { composeWithDevTools } from 'redux-devtools-extension';
const middlewares = [thunk];
let reducers = combineReducers({
    Movies : Movies
})

export let state = createStore(reducers,composeWithDevTools(applyMiddleware(...middlewares)));