import * as actionTypes from "../actions/auth";
import { error, success } from 'redux-saga-requests';

const initialState = {
  email: null,
  token: null,
  userId: null,
  username: null,
  isAuth: !!localStorage.getItem('token'),
  err: null,
//   loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case success(actionTypes.REGISTER):
      // console.log(action)
      return {
        ...state,
        // token: action.token,
        email: action.data.email,
        username: action.data.username,
        isAuth: true,
        userId: action.data._id,
        // loading: false
      };

    case error(actionTypes.REGISTER):
      console.warn(action.error.response.data)
      return {
        ...state,
        err: action.error.response.data.errors.message
      }
    
    case success(actionTypes.SIGN_IN):
        return {
            ...state,
            email: action.data.email,
            username: action.data.username,
            isAuth: true,
            userId: action.data._id,
            // loading: false
            };
    case error(actionTypes.SIGN_IN):
        // console.warn(action.error.response.data.message)
        return {
          ...state,
          err: action.error.response.data.message
        }

    case actionTypes.LOG_OUT:
        return {
          ...state,
          token: null,
          userId: null,
          isAuth: null
        };

    default:
      return state;
  }
};

export default reducer;