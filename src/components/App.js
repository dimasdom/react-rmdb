import React from 'react';
import Home from "./Home";
import {state} from "../redux/state";
import {Provider} from "react-redux";
import {createGlobalStyle} from'styled-components'
import {Router} from "@reach/router";
import Movie from "./elements/Movie";
import Header from "./elements/Header";

const GlobalStyle = createGlobalStyle`
body{
margin:0;
padding:0;
box-sizing:border-box;
}
`

const App = () => (<div>
    <Provider store={state}>
        <Header/>
        <Router>
            <Home path="/"/>
            <Movie path="/:movieId" />
        </Router>
    <GlobalStyle/>
    </Provider>
</div>);

export default App;
