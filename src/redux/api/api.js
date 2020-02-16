import * as axios from 'axios'


export const getMoviesAPI = async ()=>{
return axios.get("https://api.themoviedb.org/3/movie/popular?api_key=97b252c81dd6ef817b6a94e38d6112e0&language=en-US&page=1").then(response=>{return response.data.results});

}

export const getMoreMoviesAPI = async (currentPage)=>{
    return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=97b252c81dd6ef817b6a94e38d6112e0&language=en-US&page=${currentPage}`).then(response=>{return response.data.results});

}