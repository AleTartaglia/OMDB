import { combineReducers } from 'redux';
//import movies-reducer
import searchReducer from './searchReducer'
import userReducer from './userReducer'

export default combineReducers({
  searchReducer,
  userReducer
})