import React from 'react';
import {StyledLoadMoreBtn} from "../styles/StyledLoadMoreBtn";

const LoadMoreBtn = ({fetchMoreMovie,CurrentPage})=> (<StyledLoadMoreBtn onClick={()=>fetchMoreMovie(CurrentPage)}>Load More</StyledLoadMoreBtn>)

export default LoadMoreBtn