//import constants
import { MOVIES_SEARCH, SINGLE_MOVIE, SHOW_FAVS } from "../constants";
//initialstate

const initialState = {
  movies: [],
  movieSelected: {},
  moviesFavoritas: []
}
//switch

export default (state = initialState, action) => {
  switch (action.type) {
    case MOVIES_SEARCH:
      return { ...state, movies: action.pelis };
    case SINGLE_MOVIE:
      return { ...state, movieSelected: action.pelicula };
    case SHOW_FAVS:
      return { ...state, moviesFavoritas: action.favoritos };
    default:

      return state;
  }
}