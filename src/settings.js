
export const BASE_SETTINGS = {
    url: 'http://localhost:3000',
    paths: {
        movies: '/movies/',
        movie: {
            fullname: '/movies/movie/:movieId?',
            basename: '/movies/movie/'
        }
    },
    breakpoints: {
        desktop: '1200px',
        tablet: '769px',
        mobile: '440px'
    }
}

export const STYLE = {
    fonts: {
        roboto: "'Roboto', sans-serif",
    },
    colors: {
        background: '#262A2E',
        dark: '#1B1E21',
        blue: '#299DED',
        white: '#FFFFFF',
        grey: '#303539',
        lightGrey: '#606365',
    },
    breakpoints: {
        desktop: '1200px',
        tablet: '769px',
        mobile: '440px'
    }
}