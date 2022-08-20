import { useQuery } from "react-query";
import styled from "styled-components";
import {motion, AnimatePresence, useViewportScroll} from 'framer-motion';
import { getMovies, IGetMovieResult } from "../api";
import { makeImagePath } from "../utils";
import { useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";


const Wrapper = styled.div`
    background: black;
`;

const Loader = styled.div`
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Banner = styled.div<{bgphoto: string}>`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px;
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${(props) => props.bgphoto});
    background-size: cover;
`;

const Title = styled.h2`
    font-size: 60px;
    margin-top: 20px;
`;

const Overview = styled.p`
    font-size: 25px;
    width: 50%;
`;

const Slider = styled.div`
    position: relative;
    top: -100px;
`;

const Row = styled(motion.div)`
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(6, 1fr);
    position: absolute;
    width: 100%;
`;

const Box = styled(motion.div)<{bgphoto: string}>`
    background-color: white;
    height: 200px;
    background-image: url(${(props) => props.bgphoto});
    background-size: cover;
    background-position: center center;
    font-size: 65px;
    cursor: pointer;
    &:first-child {
        transform-origin: center left;
    }
    &:last-child {
        transform-origin: center right;
    }
`;

const Info = styled(motion.div)`
    padding: 10px;
    background-color: ${(props) => props.theme.black.lighter};
    opacity: 0;
    position: absolute;
    width: auto;
    bottom: 0;
    h4 {
        text-align: center;
        font-size: 16px;
    }
`;

const Overlay = styled(motion.div)`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0,0,0,0.5);
    opacity: 0;
`;

const BigMovie = styled(motion.div)`
    position: absolute;
    width: 40vw;
    height: 80vh;
    background-color: ${(props) => props.theme.black.lighter};
    left:0;
    right: 0;
    margin: 0 auto;
    border-radius: 15px;
    overflow: hidden;
`;

const BigCover = styled.div`
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 400px;
`;

const BigTitle = styled.h3`
    color: ${(props) => props.theme.white.lighter};
    padding: 20px;
    font-size: 46px;
    position: relative; 
    top: -80px; 
`;

const BigOverview = styled.p`
    padding: 20px;
    position: relative; 
    top: -100px; 
    color: ${(props) => props.theme.white.lighter};
`;

const rowVariants = {
    hidden: {
        x: window.outerWidth + 5,
    },
    visible: {
        x: 0,
    },
    exit: {
        x: -window.outerWidth - 5,
    },
}

const boxVariants = {
    nomal: {
        scale: 1,
    },
    hover: {
        scale: 1.3,
        y: -50,
        transition: {
            delay: 0.5,
            duration: 0.3,
            type:"tween"
        }
    },
}

const infoVariants = {
    hover: {
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 0.3,
            type:"tween"
        }
    }
}

const offset = 6;

function Home() {
    const history = useNavigate();
    const bigMovieMatch = useMatch("movies/:movieId");
    const {scrollY} = useViewportScroll();
    const {isLoading, data } = useQuery<IGetMovieResult>(["movies", "nowPlaying"], getMovies);
    
    const [index, setIndex] = useState(0);
    const [leaving, setLeaving] = useState(false);
    const increaseIndex = () => {
        if (data) {
            if(leaving) return;
            setLeaving(true);
            const totalMovies = data.results.length - 1;
            const maxIndex = Math.floor(totalMovies / offset) - 1; 
            setIndex((prev) => prev === maxIndex ? 0 : prev + 1);
        }
    };
    
    const toggleLeaving = () => {
        setLeaving((prev) => !prev);
    }

    const onBoxClicked = (movieId:number) => {
        history(`/movies/${movieId}`);
    }
    const onOverlayClkick = () => {
        history(`/`);
    }
    const clickedMovie = bigMovieMatch?.params.movieId && data?.results.find((movie) => movie.id+"" === bigMovieMatch.params.movieId);
    
    return (
        <Wrapper>
            {
                isLoading ? 
                <Loader>Loading...</Loader> : 
                <>
                    <Banner 
                        onClick={increaseIndex} 
                        bgphoto={makeImagePath(data?.results[0].backdrop_path || "")}>
                        <Title>{data?.results[0].title}</Title>
                        <Overview>{data?.results[0].overview}</Overview>
                    </Banner>
                    <Slider>
                        <AnimatePresence 
                            initial={false}
                            onExitComplete={toggleLeaving}>
                            <Row 
                                variants={rowVariants} 
                                initial="hidden"
                                animate="visible"
                                exit="exit" 
                                transition={{type:"tween", duration: 1}}
                                key={index}
                            >
                                
                                {data?.results.slice(1).slice(offset*index, offset*index+offset).map((movie) => (
                                    <Box 
                                        layoutId={movie.id+""}
                                        key={movie.id}
                                        whileHover="hover"
                                        initial="nomal"
                                        variants={boxVariants}
                                        transition={{type:"tween"}}
                                        bgphoto={makeImagePath(movie?.backdrop_path, "w500")}
                                        onClick={() => onBoxClicked(movie.id)}
                                    >
                                        <Info variants={infoVariants}>
                                            <h4>{movie.title}</h4>
                                        </Info>
                                    </Box>

                                ))}
                            </Row>
                        </AnimatePresence>
                    </Slider>
                    <AnimatePresence>
                        {
                            bigMovieMatch 
                            ? 
                            <>
                            <Overlay 
                                onClick={onOverlayClkick} 
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                            />
                            (
                                <BigMovie
                                    layoutId={bigMovieMatch.params.movieId} 
                                    style={{top: scrollY.get() + 100}}
                                >
                                    {
                                        clickedMovie && 
                                        <>
                                            <BigCover 
                                                style={{ 
                                                    backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImagePath(
                                                        clickedMovie.backdrop_path, 
                                                        "w500"
                                                    )})`
                                                }} 
                                            />
                                            <BigTitle>{clickedMovie.title}</BigTitle>
                                            <BigOverview>{clickedMovie.overview}</BigOverview>
                                        </>
                                    }
                                </BigMovie>
                            )
                            </>
                            : 
                            null
                        }   
                    </AnimatePresence>
                </>
            }
        </Wrapper>
    )
}

export default Home;