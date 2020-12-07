//import constants
import { USER_LOGEADO, USER_LOGOUT } from "../constants";
//initialstate

const initialState = {
  userLogeado: {}
}
//switch

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGEADO:
      return { ...state, userLogeado: action.data };
    case USER_LOGOUT:
      return { ...state, userLogeado: {} };

    default:
      return state;
  }
}