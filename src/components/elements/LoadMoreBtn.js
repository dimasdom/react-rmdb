import React from 'react';
import {StyledLoadMoreBtn} from "../styles/StyledLoadMoreBtn";

const LoadMoreBtn = ({fetchMoreMovie,CurrentPage,SearchStatus})=> (<StyledLoadMoreBtn onClick={()=>fetchMoreMovie(CurrentPage,SearchStatus)}>Load More</StyledLoadMoreBtn>)

export default LoadMoreBtn