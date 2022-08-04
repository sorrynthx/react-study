import { useQuery } from "react-query";
import styled from "styled-components";
import {motion, AnimatePresence} from 'framer-motion';
import { getMovies, IGetMovieResult } from "../api";
import { makeImagePath } from "../utils";
import { useState } from "react";

const Wrapper = styled.div`
    background: black;
`;

const Loader = styled.div`
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Banner = styled.div<{bgPhoto: string}>`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px;
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${(props) => props.bgPhoto});
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
    gap: 10px;
    grid-template-columns: repeat(6, 1fr);
    position: absolute;
    width: 100%;
`;

const Box = styled(motion.div)`
    background-color: white;
    height: 200px;
    color: red;
    font-size: 65px;
`;

const rowVariants = {
    hidden: {
        x: window.outerWidth + 10,
    },
    visible: {
        x: 0,
    },
    exit: {
        x: -window.outerWidth - 10,
    },
}

function Home() {
    
    const {isLoading, data } = useQuery<IGetMovieResult>(["movies", "nowPlaying"], getMovies);
    //console.log(isLoading, data);
    
    const [index, setIndex] = useState(0);
    const increaseIndex = () => setIndex((prev) => prev + 1);
    return (
        <Wrapper>
            {
                isLoading ? 
                <Loader>Loading...</Loader> : 
                <>
                    <Banner 
                        onClick={increaseIndex} 
                        bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}>
                        <Title>{data?.results[0].title}</Title>
                        <Overview>{data?.results[0].overview}</Overview>
                    </Banner>
                    <Slider>
                        <AnimatePresence>
                            <Row 
                                variants={rowVariants} 
                                initial="hidden"
                                animate="visible"
                                exit="exit" 
                                transition={{type:"tween", duration: 1}}
                                key={index}
                            >
                                
                                {[1,2,3,4,5,6].map(i => (
                                    <Box key={i}>{i}</Box>
                                ))}
                            </Row>
                        </AnimatePresence>
                    </Slider>
                </>
            }
        </Wrapper>
    )
}

export default Home;