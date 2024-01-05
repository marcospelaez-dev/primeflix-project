import axios from "axios";
// Base da URL: https://api.themoviedb.org/3/
// URL da Api: movie/now_playing?api_key=118a455776470242ab30d179fe9a1386&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;