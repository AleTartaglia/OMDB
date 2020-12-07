import React, { useEffect, useState } from 'react';
import Favoritos from '../components/Favoritos';
import { connect } from 'react-redux';
import { showFavs, favDeleted } from "../store/action-creators/searchMovie"

//aca va el delete en favoritos! despues de comer hacelo vago


const FavoritosContainer = ({ showFavs, userId, favoritos, favDeleted }) => {

  const { boolean, setBoolean } = useState(false)

  useEffect(() => {
    if (!boolean || boolean) {
      showFavs(userId)
    }
  }, [boolean])

  const deletedMovie = (id, userId) => {
    favDeleted(id, userId).then(() => { return setBoolean(!boolean) })

  }

  return (
    <Favoritos favoritos={favoritos} deletedMovie={deletedMovie} />
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.userReducer.userLogeado.id,
    favoritos: state.searchReducer.moviesFavoritas,
  }

}
const mapDispatchToProps = (dispatch) => {
  return {
    showFavs: (userid) => dispatch(showFavs(userid)),
    favDeleted: (id, userid) => dispatch(favDeleted(id, userid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritosContainer)

