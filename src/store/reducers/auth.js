import * as actionTypes from "../actions/auth";
import { error, success } from 'redux-saga-requests';

const initialState = {
  email: null,
  token: null,
  userId: localStorage.getItem('user_id'),
  username: localStorage.getItem('username'),
  isAuth: !!localStorage.getItem('token'),
  err: null,
//   loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case success(actionTypes.REGISTER):
      // console.log(action)
      const newUser = JSON.parse(action.response.config.data);
      localStorage.setItem('token', action.data.token)
      localStorage.setItem('user_id', action.data._id)
      localStorage.setItem('username', newUser.username)

      return {
        ...state,
        // token: action.token,
        email: newUser.email,
        username: newUser.username,
        isAuth: true,
        userId: action.data._id,
        // loading: false
      };

    case error(actionTypes.REGISTER):
      // console.warn(action.error.response.data)
      return {
        ...state,
        err: action.error.response.data.errors.message
      }
    
    case success(actionTypes.SIGN_IN):
      const user = JSON.parse(action.response.config.data);
      localStorage.setItem('token', action.data.token)
      localStorage.setItem('user_id', action.data._id)
      localStorage.setItem('username', user.username)

        return {
            ...state,
            email: user.email,
            username: user.username,
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