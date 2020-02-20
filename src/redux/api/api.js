import * as axios from 'axios'
import {API_KEY, API_URL} from "../../config";

//API for take data from TMDB
export const getMoviesAPI = async ()=>{
return axios.get("https://api.themoviedb.org/3/movie/popular?api_key=97b252c81dd6ef817b6a94e38d6112e0&language=en-US&page=1").then(response=>{return response.data.results});

}

export const getMoreMoviesAPI = async (currentPage)=>{
    return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=97b252c81dd6ef817b6a94e38d6112e0&language=en-US&page=${currentPage}`).then(response=>{return response.data.results});

}

export const getSearchResultMovieAPI = async (search)=>{
    return axios.get(`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`).then(response=>{return response.data.results});
}

export const getMoreSearchMoviesAPI = async (search,page) =>{
    return axios.get(`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=${page}&include_adult=false`).then(response=>{return response.data.results});
}

export const getFilmDetailsByIdAPI = async (id) =>{
   return  axios.get(`${API_URL}movie/${id}?api_key=${API_KEY}&language=en-US&page=1`).then(response=>{return response.data});
}

export const getFilmCreditsByIdAPI = async (id) =>{
    return axios.get(`${API_URL}movie/${id}/credits?api_key=${API_KEY}`).then(response=>{return response.data});
}

export const getPersonByIdAPI = async (id) =>{
   return axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=97b252c81dd6ef817b6a94e38d6112e0&language=en-US`).then(response=>response.data);
}

export const getPersonBackgroundByIdAPI = async (id) =>{
    return axios.get(`https://api.themoviedb.org/3/person/${id}/tagged_images?api_key=97b252c81dd6ef817b6a94e38d6112e0&language=en-US&page=1`).then(response=>response.data)
}