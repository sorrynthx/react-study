import {useEffect, useState} from 'react';
import Movie from './components/Movie';

function Home() {

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    // api fetch with async
    const getMovies = async () => {
        const json = await(
            await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=1.0")
        ).json();

        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);

    console.log(movies);

    return (
        <div>
            {
                loading
                    ? <h1>loading...</h1>
                    : movies.map(
                        (movie) => <Movie
                            key={movie.id}
                            coverImg={movie.medium_cover_image}
                            title={movie.title_long}
                            summary={movie.summary}
                            genres={movie.genres}/>
                    )
            }
        </div>
    );
}
export default Home;