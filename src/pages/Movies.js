import React from 'react';
import styled from 'styled-components';
import { Container } from "../components/common/style";
import axios from 'axios';
import MovieItem from '../components/MovieItem';
import Preloader, { PreloaderWrapper } from '../components/common/Preloader';
import { withRouter } from 'react-router';
import Paginations from '../components/Pagination';
import emptyPoster from '../assets/images/empty-poster.jpg';

const MoviesListWrapper = styled.div`
    width: 100%;
`;

const MoviesListContainer = styled(Container)`
    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

class MoviesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            loaded: false,
            countPages: 0,
            currentPage: 1,
        }

        this.getListMovies = this.getListMovies.bind(this);
        this.setLoaded = this.setLoaded.bind(this);
        this.changePage = this.changePage.bind(this);
    }

    setLoaded(value) {
        this.setState({ loaded: value });
    }

    changePage(page) {
        this.setState({ movies: [] });
        this.setState({ currentPage: page });
        this.getListMovies(page);
    }

    getListMovies(page = 1) {
        this.setLoaded(true);
        return axios.get(`https://yts.mx/api/v2/list_movies.json?page=${page}`)
            .then(response => {
                const { status } = response.data;
                if (status === 'ok') {
                    const { movies, movie_count, limit } = response.data.data;
                    this.setState({ 
                        movies, 
                        countPages: Math.ceil(movie_count / limit) 
                    });
                    this.setLoaded(false);
                }
            });
    }

    componentDidMount() {
        this.getListMovies();
    }

    render() {
        return (
            <MoviesListWrapper>
                <Paginations 
                    page={this.state.currentPage}
                    countPages={this.state.countPages}
                    setPage={this.changePage}
                />
                <MoviesListContainer>
                    {!this.state.loaded ? this.state.movies.map(movie => <MovieItem 
                        key={movie.id}
                        id={movie.id}
                        poster={movie.large_cover_image}
                        title={movie.title}
                        year={movie.year}
                        rating={movie.rating}
                        genres={movie.genres}
                    />) : <PreloaderWrapper>
                            <Preloader />
                        </PreloaderWrapper>}    
                </MoviesListContainer>
            </MoviesListWrapper>
        )
    }
}

export default withRouter(MoviesList);