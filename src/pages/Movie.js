import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { Container, Flex, Text } from '../components/common/style';
import axios from 'axios';
import Preloader, { PreloaderWrapper } from '../components/common/Preloader';
import Rating from '../components/Rating';
import { STYLE, BASE_SETTINGS} from '../settings';
import Comments from '../components/Comments';

const MovieWrapper = styled.div`
    width: 100%;
`;

const MovieContainer = styled(Container)`
`;

const InfoPanel = styled(Flex)`
    margin-top: 1.75rem;
`;

const Poster = styled.div`
    width: 40%;

    & img {
        width: 100%;
        border-radius: 20px;
    }

    @media (max-width: ${BASE_SETTINGS.breakpoints.tablet}) {
        width: auto;
        margin: 0 5rem;
    }
`;

const Box = styled.div`
    display: flex;

    @media (max-width: ${BASE_SETTINGS.breakpoints.tablet}) {
        display: block;
    }
`;

const MovieBody = styled.div`
    width: 60%;
    margin-left: 3.1rem;

    @media (max-width: ${BASE_SETTINGS.breakpoints.tablet}) {
        width: auto;
        margin: 2rem 1rem 0;
    }
`;

const Subtitle = styled.div`
    margin-top: 2.8rem;
    margin-bottom: 1.1rem;
    font-weight: 500;
    font-size: 3rem;
    line-height: 35.16px;
`;

const Genre = styled.span`
    font-weight: 300;
    font-size: 2rem;
    line-height: 23.44px;
    position: relative;
    padding-right: 2.7rem; 
    margin-left: 2rem; 
    user-select: none;

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: -2rem;
        transform: translate(0, -50%);
        width: 1.3rem;
        height: 1.3rem;
        background-color: ${STYLE.colors.lightGrey};
        border-radius: 50%;  
        transition: background-color .3s ease;
    }

    &:hover {
        &::before {
            background-color: ${STYLE.colors.blue};
        }
    }
`;

const Movie = ({ }) => {
    const params = useParams();
    const [movie, setMovie] = useState(null);
    const [loaded, setLoaded] = useState(true);
    useEffect(() => {
        axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${params.movieId}`)
            .then(response => {
                setLoaded(true)
                const { status } = response.data;
                if (status === 'ok') {
                    const { movie: value } = response.data.data;
                    setMovie(value);
                    setLoaded(false);
                }
            })
        return () => {
            setMovie(null); 
        }
    }, []);
    return (
        <MovieWrapper>
            <MovieContainer>
                {!loaded ? <Box>
                    <Poster>
                        <img 
                            src={movie.large_cover_image}
                            alt={movie.title}
                        />
                    </Poster>
                    <MovieBody>
                        <Text
                            weight={200}
                            transform='uppercase'
                            size={5}
                            lineHeight={58.59}
                            as='h1'
                        >{movie.title}</Text>
                        <InfoPanel
                            justify="space-between"
                        >
                            <Rating value={movie.rating} />
                            <Text
                                weight={300}
                                size={2}
                                lineHeight={23.44}
                            >
                                {movie.runtime} min. / {movie.year} year
                            </Text>
                        </InfoPanel>
                        <div>
                            <Subtitle
                                as='h2'
                            >Genres</Subtitle>
                            <Flex
                                align='center'
                            >
                                {movie.genres.map((genre, id) => <Genre key={id}>{genre}</Genre>)}
                            </Flex>
                        </div>
                        <div>
                            <Subtitle
                                as='h2'
                            >Plot</Subtitle>
                            <Text
                                weight={300}
                                size={2}
                                lineHeight={23.44}
                            >{movie.description_full}</Text>
                        </div>
                        <div>
                            <Subtitle
                                as='h2'
                            >Comments</Subtitle>
                            <Comments 
                                id={params.movieId}
                            />
                        </div>
                    </MovieBody>
                </Box> : <PreloaderWrapper>
                    <Preloader />
                </PreloaderWrapper>}
            </MovieContainer>
        </MovieWrapper>
    )
}

export default Movie;