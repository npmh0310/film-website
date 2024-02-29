import axios from 'axios';

const movieBaseUrl = 'https://api.themoviedb.org/3'
const api_key = 'f9e5b39156ee54dbdaf0400c64c0f598';
// https://api.themoviedb.org/3/trending/movie/day?api_key=f9e5b39156ee54dbdaf0400c64c0f598
const getTrendingVideos = axios.get(movieBaseUrl + '/trending/movie/day?api_key=' + api_key)

export default {
    getTrendingVideos
}