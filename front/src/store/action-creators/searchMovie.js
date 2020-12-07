import axios from 'axios';
import { MOVIES_SEARCH, SINGLE_MOVIE, SHOW_FAVS, } from '../constants';

const reciveMovies = (pelis) => {
  return {
    type: MOVIES_SEARCH,
    pelis
  }
}

const reciveSingleMovie = (pelicula) => {
  return {
    type: SINGLE_MOVIE,
    pelicula
  }
}

const showAllFavs = (favoritos) => {
  return {
    type: SHOW_FAVS,
    favoritos
  }
}

export const movieSearch = (movie) => dispatch =>
  axios.get(`http://www.omdbapi.com/?apikey=20dac387&s=${movie}`)
    .then(res => res.data)
    .then(movies => dispatch(reciveMovies(movies)));

export const singlePelicula = (id) => dispatch => {
  return axios.get(`http://www.omdbapi.com/?apikey=20dac387&i=${id}`)
    .then(res => res.data)
    .then(peliSola => dispatch(reciveSingleMovie(peliSola)))
}

export const addFavs = (movieFav) =>
  axios.post("/api/favorites/", movieFav)

export const favDeleted = (movieId, user) => dispatch =>
  axios.delete(`/api/favorites/delete/${movieId}`)
    .then(() => dispatch(showFavs(user)))

export const showFavs = (userid) => dispatch =>
  axios.get(`/api/favorites/${userid}`)
    .then(res => res.data)
    .then(pelisfavs => dispatch(showAllFavs(pelisfavs)))



