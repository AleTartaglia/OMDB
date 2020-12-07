import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from "./Footer";
import NavbarContainer from '../containers/NavbarContainer';
import MovieListContainer from "../containers/MovieListContainer"
import SingleMovieContainer from "../containers/SingleMovieContainer"
import RegisterContainer from '../containers/RegisterContainer.jsx';
import LoginContainer from '../containers/LoginContainer.jsx';
import FavoritosContainer from '../containers/FavoritosContainer';
import { connect } from 'react-redux';
import { userPersitence } from "../store/action-creators/userActions"
const Main = ({ persistence }) => {

  useEffect(() => {
    persistence()
  }, [])

  return (
    <div style={{ background: "black" }}>
      <Route path="/" component={NavbarContainer} />
      <Switch>
        <Route exact path="/movies/favorites" component={FavoritosContainer} />
        <Route exact path="/movies/register" component={RegisterContainer} />
        <Route exact path="/movies/login" component={LoginContainer} />
        <Route exact path="/movies/:id" component={SingleMovieContainer} />
        <Route exact path="/movies" component={MovieListContainer} />
      </Switch>
      <Footer />
    </div>

  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    persistence: () => dispatch(userPersitence())
  }
}

export default connect(null, mapDispatchToProps)(Main);
