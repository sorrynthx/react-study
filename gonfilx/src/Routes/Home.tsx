import { useQuery } from "react-query";
import { getMovies } from "../api";

function Home() {
    
    const {isLoading, data } = useQuery(["movies", "nowPlaying"], getMovies);
    console.log(isLoading, data);
    
    return (
        <div style={{ backgroundColor: "whitesmoke", height: "200vh" }}>home</div>
    )
}

export default Home;