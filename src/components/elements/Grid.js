import React from 'react';

import {StyledGrid} from "../styles/StyledGrid";
import {StyledGridContent} from "../styles/StyledGrid";

const Grid = ({header,children}) => {
    return(
        <StyledGrid>
            <h1>{header}</h1>
            <StyledGridContent>
                {children}
            </StyledGridContent>
        </StyledGrid>
    )
}



export default Grid
