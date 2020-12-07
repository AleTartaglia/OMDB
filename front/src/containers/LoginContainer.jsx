import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import Login from "../components/Login";
import { userLogin } from '../store/action-creators/userActions'

const LoginContainer = ({ userLogin, history }) => {

  const [password, setPass] = useState("")
  const [email, setEmail] = useState("")

  const emailChangeHandler = (evt) => {
    const value = evt.target.value;
    setEmail(value)
  }
  const passChangeHandler = (evt) => {
    const value = evt.target.value;
    setPass(value)
  }
  const onSubmit = (evt) => {
    evt.preventDefault()
    console.log("register attempt...");
    userLogin({ password, email }).then(() => {
      setEmail("")
      setPass("")
      return history.push("/movies")
    })
  }

  return (
    <Login onSubmit={onSubmit} emailChangeHandler={emailChangeHandler} passChangeHandler={passChangeHandler} />
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    history: ownProps.history
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (data) => dispatch(userLogin(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)