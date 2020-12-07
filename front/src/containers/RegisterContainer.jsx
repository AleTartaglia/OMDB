import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import Register from "../components/Register";
import { userRegister } from '../store/action-creators/userActions'

const RegisterContainer = ({ history }) => {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")


  const nameChangeHandler = (evt) => {
    const value = evt.target.value;
    setName(value)
  }
  const emailChangeHandler = (evt) => {
    const value = evt.target.value;
    setEmail(value)
  }
  const passChangeHandler = (evt) => {
    const value = evt.target.value;
    setPassword(value)
  }

  const onSubmit = (evt) => {
    evt.preventDefault()
    console.log("register attempt...");
    userRegister({ name, password, email }).then(() => {
      setName("")
      setEmail("")
      setPassword("")
      return history.push("/movies/login")
    })
  }

  return (
    <Register onSubmit={onSubmit} nameChangeHandler={nameChangeHandler} emailChangeHandler={emailChangeHandler} passChangeHandler={passChangeHandler} />
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    history: ownProps.history
  }
}


export default connect(mapStateToProps, null)(RegisterContainer)