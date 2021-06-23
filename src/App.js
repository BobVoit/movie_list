import React from "react";
import { withRouter } from "react-router";
import { compose } from "redux";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Redirect
} from 'react-router-dom';
import Reset from "./components/common/Reset";
import { BaseStyle } from "./components/common/style";
import Header from "./components/Header";
import { BASE_SETTINGS } from "./settings";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";


const Wrapper = styled.div`
  width: 100%;
`;

const Main = styled.main`
  margin-top: 12rem;
`;

class App extends React.Component {

  render() {
    const { paths } = BASE_SETTINGS;
    return (
        <Wrapper>
          <Header />
          <Main>
            <Redirect from="/" to={paths.movies} />
            <Route exact path={paths.movies} render={() => <Movies />} />
            <Route path={paths.movie.fullname} render={() => <Movie />} />
          </Main>
        </Wrapper>
    )
  }
}

let AppContainer = compose(
  withRouter, 
)(App);

const MainApp = () => {
  return (
    <HashRouter>
      <Reset />
      <BaseStyle />
      <AppContainer />
    </HashRouter>
  )
}

export default MainApp;