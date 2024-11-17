import { API_KEY } from "./TMDBConfig";
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"

export async function getGenres() {
    try {
        const res = await axios({
            method: "get",
            url: `${BASE_URL}/genre/movie/list`,
            params: {
                api_key: API_KEY,
                language: "pt-BR"
            }
        });
        return res.data.genres; // Retorna os gêneros
    } catch (err) {
        console.error("Erro ao buscar gêneros:", err);
        throw err; // Propaga o erro para ser tratado pelo chamador
    }
}

export async function getMovieByGenre(genreId) {
    axios({
        method: "get",
        url: `${BASE_URL}/discover/movie`,
        params: {
            api_key: API_KEY,
            language: "pt-BR",
            with_genres: genreId,
            include_video: true
        }
    }).then(res =>{
        console.log(res.data) //Retorna filmes de um genero Especifico
    })
}

export async function getVideoByMovie(movieId){
    axios({
        method: "get",
        url: `${BASE_URL}/movie/${movieId}/videos`,
        params: {
            api_key: API_KEY,
            language: "pt-BR",
        }
    }).then(res =>{
        console.log(res.data)
        console.log(`https://www.youtube.com/watch?v=${res.data.results[0].key}`) // Aqui retorna a URL do YT com o trailer, basta colcoar num Iframe do HTML
    })
}

export async function getMovieById(movieId){
    axios({
        method: "get",
        url: `${BASE_URL}/movie/${movieId}`,
        params: {
            api_key: API_KEY,
            language: "pt-BR",
        }
    }).then(res =>{
        console.log(res.data) // Aqui retorna todos os dados importantes de filmes
    })
}

export async function getTrendingMovies() {

    let posters = [];
    try {
        const res = await axios({
            method: "get",
            url: `${BASE_URL}/trending/movie/day`,
            params: {
                api_key: API_KEY,
                language: "pt-BR"
            }
        });
        posters = res.data.results.map(movie => movie.poster_path);

    } catch (err) {
        
        //Pasta de Backup se requisiçao falhar
        const importAll = r => r.keys().map(r);
        posters = importAll(require.context('../../assets/img/home_page/Carrossel', false, /\.(png|jpe?g|svg)$/));
    }

    return posters;
}