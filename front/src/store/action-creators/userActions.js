import axios from 'axios';
import { USER_LOGEADO, USER_LOGOUT } from '../constants';

const reciveUser = (data) => {
  return {
    type: USER_LOGEADO,
    data
  }
}

const disconnect = () => {
  return {
    type: USER_LOGOUT,
  }
}


export const userLogin = (usuario) => dispatch =>
  axios.post(`/api/login`, usuario)
    .then(res => res.data)
    .then(user => dispatch(reciveUser(user)));

export const userRegister = (user) =>
  axios.post(`/api/register`, user)
    .then(res => res.data)

export const userDisconnect = () => dispatch =>
  axios.post(`/api/logout`)
    .then(() => dispatch(disconnect()))

export const userPersitence = () => dispatch => {
  axios.get("/api/me").then((res) => dispatch(reciveUser(res.data)))
}

