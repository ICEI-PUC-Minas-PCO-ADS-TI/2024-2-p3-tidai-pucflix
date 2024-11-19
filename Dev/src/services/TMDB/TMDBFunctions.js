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
        throw err;
    }
}

export async function getMovieByGenre(genreId, pages = 6) {
    try {
        let allMovies = [];


        for (let page = 1; page <= pages; page++) {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/discover/movie`,
                params: {
                    api_key: API_KEY,
                    language: "pt-BR",
                    with_genres: genreId,
                    page: page
                }
            });

            allMovies = [...allMovies, ...response.data.results];
        }

        return allMovies;

    } catch (error) {
        console.error("Erro ao buscar filmes:", error);
        return [];
    }
}


export async function getVideoByMovie(movieId) {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}/videos`, {
            params: {
                api_key: API_KEY,
                language: "pt-BR",
            },
        });

        const videoKey = response.data.results[0]?.key;
        return videoKey ? `https://www.youtube.com/embed/${videoKey}` : null;
    } catch (error) {
        console.error("Erro ao buscar vídeo:", error);
        return null;
    }
}

export async function getMovieById(movieId) {
    try {
        const res = await axios({
            method: "get",
            url: `${BASE_URL}/movie/${movieId}`,
            params: {
                api_key: API_KEY,
                language: "pt-BR",
            }
        });
        const movie = res.data
        return movie;

    } catch (error) {
        console.error(error);
        throw error;
    }
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

        posters = res.data.results.map(movie => `https://image.tmdb.org/t/p/w500${movie.poster_path}`);

    } catch (err) {
        console.error("Erro ao buscar dados da API:", err);

        const importAll = r => r.keys().map(r);
        posters = importAll(require.context('../../assets/img/home_page/Carrossel', false, /\.(png|jpe?g|svg)$/));

    }

    return posters;
}


export async function getSearchMovies(keyword) {

    let movies = [];
    try {
        const res = await axios({
            method: "get",
            url: `${BASE_URL}/search/movie`,
            params: {
                api_key: API_KEY,
                language: "pt-BR",
                query: keyword
            }
        });
        movies = res.data.results
        return movies
    } catch (err) {
        console.error("Erro ao buscar dados da API:", err);

    }
}
