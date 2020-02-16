import React from 'react';

import {StyledGrid} from "../styles/StyledGrid";
import {StyledGridContent} from "../styles/StyledGrid";

const Grid = ({movies,children}) => {
    return(
        <StyledGrid>
            <h1>Popular Movie</h1>
            <StyledGridContent>
                {children}
            </StyledGridContent>
        </StyledGrid>
    )
}



export default Grid
