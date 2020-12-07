import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { movieSearch } from "../store/action-creators/searchMovie";
import { userDisconnect } from "../store/action-creators/userActions";
import Navbar from '../components/Navbar'
const NavbarContainer = ({ searchMovie, userlog, userDisconnect, history }) => {

  const [input, setInput] = useState("")

  const onChange = (evt) => {
    const value = evt.target.value;
    setInput(value)
  }

  const logout = () => {
    console.log("the session has finished")
    userDisconnect().then(() => history.push("/movies"))
  }

  const onSubmit = (evt) => {
    evt.preventDefault()
    searchMovie(input).then(() => {
      setInput("")
      return history.push("/movies")
    })
  }
  return (
    <Navbar onChange={onChange} onSubmit={onSubmit} input={input} userlog={userlog} logout={logout} />
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    userlog: state.userReducer.userLogeado.name,
    history: ownProps.history
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    searchMovie: (movie) => dispatch(movieSearch(movie)),
    userDisconnect: (user) => dispatch(userDisconnect(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)

