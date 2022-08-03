const API_KEY = 'bc51ec97a9e2a30b346298351d4167e5';
const BASE_PATH = 'https://api.themoviedb.org/3';

interface IMovice {
    id: number;
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
}

export interface IGetMovieResult {
    dates: {
        maximum: string;
        minimum: string;
    };
    page: number,
    results: IMovice[],
    total_pages: number,
    total_results: number,

}

export function getMovies() {
    return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`)
    .then((response) => response.json());
}