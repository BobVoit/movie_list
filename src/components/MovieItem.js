import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { STYLE, BASE_SETTINGS } from "../settings";
import star from '../assets/images/star-blue.svg';
import emptyPoster from '../assets/images/empty-poster.jpg';

const MovieItemWrapper = styled.div`
    width: 25%;
    padding: 0 1rem;
    margin-bottom: 2rem;

    font-family: ${STYLE.fonts.roboto};

    @media (max-width: ${STYLE.breakpoints.desktop}) {
        width: 33%;
    }
    @media (max-width: ${STYLE.breakpoints.tablet}) {
        width: 50%;
    }
    @media (max-width: ${STYLE.breakpoints.mobile}) {
        width: 100%;
    }
`;

const MovieItemInfo = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    border-radius: 15px;
    transition: all .3s linear;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Rating = styled.div`
    margin-top: 4rem;
    text-align: center;
`;

const Star = styled.img`
    width: 3.2rem;
`;

const RatingValue = styled.div`
    margin-top: 1.15rem;

    color: ${STYLE.colors.white};
    font-size: 2.5rem;
    line-height: 29.3px;
`;

const Genres = styled.div`
    margin-top: 3.1rem;
    color: ${STYLE.colors.white};
`;

const Genre = styled.div`
    line-height: 42.21px;
    font-size: 3rem;
`;

const Button = styled.button`
    position: absolute;
    bottom: -5rem;
    visibility: hidden;
    left: 50%;
    transform: translate(-50%, 0);
    margin-top: 7.1rem;
    padding: 0.2em 1.2em;
    font-size: 2.5rem;
    line-height: 29.3px;
    color: ${STYLE.colors.grey};
    border-radius: 5px;
    background-color: ${STYLE.colors.blue};
    transition: bottom .5s ease;
`;

const MovieData = styled.div`
    position: relative;
    border: 5px solid ${STYLE.colors.white};
    border-radius: 20px;
    transition: border .3s linear;

    &:hover {
        border: 5px solid ${STYLE.colors.blue};
        & ${MovieItemInfo} {
            opacity: 1;
            background-color: rgba(48,53,57,.8);
            backdrop-filter: blur(4px);
        }

        & ${Button} {
            bottom: 5rem;
            visibility: visible;
        }
    }
`;

const Subtitle = styled.div`
    margin: 1rem 0 0 .8rem;
`;

const Title = styled.div`
    font-size: 2.2rem;
    line-height: 21,09px;
    color: ${STYLE.colors.white};
    font-family: ${STYLE.fonts.roboto};
`;

const Year = styled.div`
    margin-top: .5rem;
    font-weight: 300;
    font-family: ${STYLE.fonts.roboto};
    line-height: 21,09px;
    font-size: 1.6rem;
    color: ${STYLE.colors.white};
`;

const Poster = styled.img`
    max-width: 100%;
    border-radius: 15px;
`;

const MovieItem = ({ id, poster, title, year, rating, genres }) => {
    const [showPoster, setShowPoster] = useState(true);
    
    const showEmptyPoster = () => {
        setShowPoster(false);
    }

    return (
        <MovieItemWrapper>
            <NavLink to={BASE_SETTINGS.paths.movie.basename + id}>
                <MovieData>
                    <MovieItemInfo>
                        <Rating>
                            <Star src={star} />
                            <RatingValue>{rating || "No rating"}</RatingValue>
                            <Genres>
                                {genres.map((genre, id) => <Genre key={id}>{genre}</Genre>)}
                            </Genres>
                        </Rating>
                        <Button>More</Button>
                    </MovieItemInfo>
                    <Poster 
                        src={showPoster ? poster : emptyPoster} 
                        onError={showEmptyPoster}
                    />
                </MovieData>
                <Subtitle>
                    <Title>{title}</Title>
                    <Year>{year}</Year>
                </Subtitle>
            </NavLink>
        </MovieItemWrapper>
    )
}

export default MovieItem;