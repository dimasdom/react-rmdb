import React, {useRef, useState} from 'react';
import {StyledSearchBar,StyledSearchBarContent} from "../styles/StyledSearchBar";
import FontAwesome from 'react-fontawesome';
const Search = ({fetchSearchMovie}) =>{
    let [state,setState] = useState('');
    const timeOut = useRef(null);

    const doSearch = event => {
        const { value } = event.target;

        clearTimeout(timeOut.current);
        setState(value);

        timeOut.current = setTimeout(() => {
            fetchSearchMovie(value);
        }, 500);
    }

    return(
    <StyledSearchBar>
        <StyledSearchBarContent>
        <FontAwesome className="fa-search" name="search" size="2x" />
            <input
                type="text"
                placeholder="Search Movie"
                onChange={doSearch}
                value={state}
            />
        </StyledSearchBarContent>
    </StyledSearchBar>)}

export default Search