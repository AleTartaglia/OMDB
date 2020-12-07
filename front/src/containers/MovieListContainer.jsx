import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import MovieCard from '../components/MovieCard';
import { movieSearch } from "../store/action-creators/searchMovie"

const MovieListContainer = ({ movies, searchMovie }) => {

  const arrayMovies = ["Star", "Life", "Adventures", "Search", "After", "Journey", "Before", "Monster", "Knight", "Love"]
  const index = Math.floor(Math.random() * arrayMovies.length)

  useEffect(() => {
    if (!movies) searchMovie(arrayMovies[index])
  }, [])

  return (
    <MovieCard movies={movies} />
  )
}

const mapStateToProps = state => {

  return {
    movies: state.searchReducer.movies.Search
  }
}
const mapDispatchToProps = dispatch => {
  return {
    searchMovie: (movie) => dispatch(movieSearch(movie))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer)