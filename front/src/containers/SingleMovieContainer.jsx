import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import SingleMovie from '../components/SingleMovie';
import { singlePelicula, addFavs } from "../store/action-creators/searchMovie"

const MovieListContainer = ({ searchMovie, match, movieSelected, userlog }) => {

  const [bulean, setBulean] = useState(false)

  useEffect(() => {
    searchMovie(match)

  }, [])

  const addToFavs = (title, poster) => {
    addFavs({ title, poster, user: userlog })
      .then(() => {
        setBulean(!bulean)
      })
  }

  return (

    <SingleMovie movieSelected={movieSelected} userlog={userlog} addToFavs={addToFavs} bulean={bulean} />
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    match: ownProps.match.params.id,
    movieSelected: state.searchReducer.movieSelected,
    userlog: state.userReducer.userLogeado.id
  }
}
const mapDispatchToProps = dispatch => {
  return {
    searchMovie: (movieId) => dispatch(singlePelicula(movieId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer) 