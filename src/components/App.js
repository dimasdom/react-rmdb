import React from 'react';
import Home from "./Home";
import {state} from "../redux/state";
import {Provider} from "react-redux";
import {createGlobalStyle} from'styled-components'

const GlobalStyle = createGlobalStyle`
body{
margin:0;
padding:0;
box-sizing:border-box;
}
`

const App = () => (<div>
    <Provider store={state}>
    <Home/>
    <GlobalStyle/>
    </Provider>
</div>);

export default App;
